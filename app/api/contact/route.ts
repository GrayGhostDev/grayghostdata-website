import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, message, service } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Gray Ghost Cyber <contact@grayghostcyber.com>',
      to: 'curtis@grayghostcyber.com',
      subject: `[CONTACT FORM] ${name}${company ? ` from ${company}` : ''}`,
      text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}${service ? `Service Interest: ${service}\n` : ''}
Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0f172a;">New Contact Form Submission</h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
    ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
    ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
    ${service ? `<p style="margin: 10px 0;"><strong>Service Interest:</strong> ${service}</p>` : ''}
  </div>

  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #0f172a; margin-top: 0;">Message:</h3>
    <p style="white-space: pre-wrap; margin: 0;">${message}</p>
  </div>

  <div style="font-size: 12px; color: #64748b; margin-top: 20px;">
    <p>This email was sent from the contact form on grayghostcyber.com</p>
  </div>
</div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}