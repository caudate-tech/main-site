import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export const runtime = 'nodejs';

function escapeHtml(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, budget, services, message } = body;

    const servicesList = Array.isArray(services) ? services : [];

    let savedId: string | undefined;
    try {
      const savedMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          website,
          services: servicesList,
          message,
        },
      });
      savedId = savedMessage.id;
    } catch (dbError) {
      console.error('Contact API: database save failed:', dbError);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeWebsite = escapeHtml(website || 'N/A');
    const safeBudget = escapeHtml(budget);
    const safeServices = escapeHtml(servicesList.join(', ') || 'None selected');
    const safeMessage = escapeHtml(message).replace(/\r\n|\n/g, '<br/>');

    const emailResult = await sendEmail({
      to: 'contact@caudate-tech.com',
      subject: `New Project Inquiry: ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Website:</strong> ${safeWebsite}</p>
        <p><strong>Budget:</strong> ${safeBudget}</p>
        <p><strong>Services:</strong> ${safeServices}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    const stored = Boolean(savedId);
    const emailed = emailResult.status === 'sent';

    if (stored || emailed) {
      return NextResponse.json({
        success: true,
        id: savedId ?? null,
        stored,
        email: emailResult.status,
      });
    }

    if (emailResult.status === 'failed') {
      return NextResponse.json(
        {
          error:
            'Could not send your inquiry by email. Please contact us at contact@caudate-tech.com or call +1 201 632 1255.',
        },
        { status: 503 },
      );
    }

    const isProd = process.env.NODE_ENV === 'production';
    if (isProd) {
      return NextResponse.json(
        {
          error:
            'Service temporarily unavailable. Please email contact@caudate-tech.com or call +1 201 632 1255.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      success: true,
      id: null,
      stored: false,
      email: 'mock',
      warning: 'Email not configured (dev); inquiry only in server logs.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
