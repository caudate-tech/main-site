import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, budget, services, message } = body;

    const servicesList = Array.isArray(services) ? services : [];

    // 1. Save to Database
    const savedMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        website,
        services: servicesList,
        message,
      },
    });

    // 2. Send Email Notification
    await sendEmail({
      to: 'admin@caudate.tech',
      subject: `New Project Inquiry: ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Services:</strong> ${servicesList.join(', ') || 'None selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, id: savedMessage.id });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
