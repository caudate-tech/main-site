import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export type SendEmailResult =
  | { status: 'mock' }
  | { status: 'sent'; messageId?: string }
  | { status: 'failed'; error: string };

/**
 * Outbound mail: Resend HTTP API when `RESEND_API_KEY` is set; otherwise SMTP via
 * Nodemailer when `EMAIL_USER` + `EMAIL_PASS` are set; otherwise a console mock for local dev.
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
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    return sendViaResend(resendKey, { to, subject, html });
  }

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

function resolveOutboundFrom(): string {
  return (
    process.env.RESEND_FROM?.trim() ||
    process.env.EMAIL_FROM?.trim() ||
    '"Caudate Tech" <contact@caudate-tech.com>'
  );
}

function formatSendError(error: unknown): string {
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string'
  ) {
    return (error as { message: string }).message;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

async function sendViaResend(
  apiKey: string,
  {
    to,
    subject,
    html,
  }: {
    to: string;
    subject: string;
    html: string;
  },
): Promise<SendEmailResult> {
  const resend = new Resend(apiKey);
  const from = resolveOutboundFrom();

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { status: 'failed', error: formatSendError(error) };
    }

    const messageId =
      data && typeof data === 'object' && 'id' in data && typeof data.id === 'string'
        ? data.id
        : undefined;

    if (!messageId) {
      return {
        status: 'failed',
        error: 'Resend returned no message id',
      };
    }

    console.log('Resend message id: %s', messageId);
    return { status: 'sent', messageId };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Resend send failed:', error);
    return { status: 'failed', error: message };
  }
}
