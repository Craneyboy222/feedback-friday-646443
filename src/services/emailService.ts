import nodemailer from 'nodemailer';
import { logger } from '../utils/logger';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export class EmailService {
  async sendEmail(to: string, subject: string, text: string) {
    try {
      const info = await transporter.sendMail({ from: 'no-reply@yourapp.com', to, subject, text });
      logger.info('Email sent successfully', { messageId: info.messageId });
    } catch (error) {
      logger.error('Error sending email', { error });
      throw new Error('Email sending failed');
    }
  }
}