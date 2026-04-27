import nodemailer from 'nodemailer';

export type SendEmailResult =
  | { status: 'mock' }
  | { status: 'sent'; messageId?: string }
  | { status: 'failed'; error: string };

/**
 * Sends mail when EMAIL_USER + EMAIL_PASS are set; otherwise logs a mock (local dev).
 * Configure SMTP_HOST, SMTP_PORT, SMTP_SECURE for production (defaults suit Ethereal tests).
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<SendEmailResult> {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim();

  if (!user || !pass) {
    console.log('--- MOCK EMAIL ---');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    console.log('------------------');
    return { status: 'mock' };
  }

  const host = process.env.SMTP_HOST?.trim() || 'smtp.ethereal.email';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    process.env.SMTP_SECURE === '1' ||
    port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    const from =
      process.env.EMAIL_FROM?.trim() || '"Caudate Tech" <contact@caudate-tech.com>';
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
    console.log('Message sent: %s', info.messageId);
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log('Preview URL: %s', preview);
    return { status: 'sent', messageId: info.messageId };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error sending email:', error);
    return { status: 'failed', error: message };
  }
}
