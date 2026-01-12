import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_KEY!);
  }

  async sendAcknowledgement(to: string, subject: string) {
    const msg = {
      to,
      from: process.env.FROM_EMAIL!,
      subject: 'We received your request',
      text: `Thanks for contacting us. We have received your message: "${subject}". Our team/AI will get back to you shortly.`,
      html: `
        <p>Thanks for contacting us.</p>
        <p>We have received your message:</p>
        <blockquote>${subject}</blockquote>
        <p>Our AI agent is reviewing it.</p>
      `,
    };

    await sgMail.send(msg);
  }
}
