import nodemailer from 'nodemailer';

// For development, we'll use a mock/test account (Ethereal)
// In production, these should be environment variables
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'mock_user',
    pass: process.env.EMAIL_PASS || 'mock_pass',
  },
});

export const sendEmail = async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
  // If no credentials, just log it
  if (!process.env.EMAIL_USER) {
    console.log('--- MOCK EMAIL ---');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    console.log('------------------');
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: '"Caudate Tech" <contact@caudate-tech.com>',
      to,
      subject,
      html,
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
