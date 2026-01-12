import { Injectable } from '@nestjs/common';

const sgMail = require('@sendgrid/mail');

@Injectable()
export class SendgridService {
  constructor() {
    if (!process.env.SENDGRID_KEY) {
      console.error('❌ SENDGRID_KEY not set');
    }
    sgMail.setApiKey(process.env.SENDGRID_KEY);
  }

  async sendAcknowledgement(to: string, subject: string) {
    const msg = {
      to,
      from: process.env.FROM_EMAIL,
      subject: 'We received your request',
      text: `Thanks for contacting us. We received: "${subject}"`,
      html: `<p>Thanks for contacting us.</p><p><b>${subject}</b></p>`,
    };

    const res = await sgMail.send(msg);
    console.log('✅ SendGrid response:', res[0].statusCode);
  }
}
