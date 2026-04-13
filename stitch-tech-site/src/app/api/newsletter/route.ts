import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 1. Save to Database
    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {}, // If exists, do nothing
      create: { email },
    });

    // 2. Send Welcome/Notification
    await sendEmail({
      to: email,
      subject: 'Welcome to Caudate Tech Insights',
      html: `
        <h2>Thanks for Subscribing!</h2>
        <p>You're now on the list for high-performance growth insights and architectural digital strategies.</p>
        <p>Regards,<br/>The Caudate Tech Team</p>
      `,
    });

    return NextResponse.json({ success: true, id: subscriber.id });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
