import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, message, service } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Gray Ghost Data <no-reply@grayghostdata.com>',
      to: 'curtis@grayghostcyber.com',
      subject: `Contact Form: ${name}${company ? ` from ${company}` : ''}`,
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

  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
    <h3 style="color: #0f172a; margin-top: 0;">Message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Failed to send message:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message' 
      },
      { status: 500 }
    );
  }
}