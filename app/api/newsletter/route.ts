import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { email, interests } = await req.json();

    // Send notification email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'curtis@grayghostdata.com',
      subject: 'New Newsletter Subscription',
      text: `
New newsletter subscription:

Email: ${email}
Interests: ${interests?.join(', ') || 'None specified'}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0f172a;">New Newsletter Subscription</h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
    <p style="margin: 10px 0;"><strong>Interests:</strong> ${interests?.join(', ') || 'None specified'}</p>
  </div>
</div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Gray Ghost Data Newsletter',
      text: `
Thank you for subscribing to our newsletter!

You'll receive updates about:
${interests?.map((interest: string) => `- ${interest}`).join('\n') || 'General updates and news'}

Stay tuned for cybersecurity insights, data analytics trends, and industry best practices.

Best regards,
The Gray Ghost Data Team
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0f172a;">Welcome to Gray Ghost Data Newsletter</h2>
  
  <p>Thank you for subscribing to our newsletter!</p>

  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #0f172a; margin-top: 0;">You'll receive updates about:</h3>
    <ul>
      ${interests?.map((interest: string) => `<li>${interest}</li>`).join('\n') || '<li>General updates and news</li>'}
    </ul>
  </div>

  <p>Stay tuned for cybersecurity insights, data analytics trends, and industry best practices.</p>

  <p>Best regards,<br>The Gray Ghost Data Team</p>
</div>
      `,
    };

    await transporter.sendMail(welcomeMailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Failed to process newsletter subscription:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process subscription' 
      },
      { status: 500 }
    );
  }
}
