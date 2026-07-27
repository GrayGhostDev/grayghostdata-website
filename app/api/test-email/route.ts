import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 503 },
      );
    }
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "curtis@grayghostdata.com",
      subject: "Test Email from Gray Ghost Data",
      html: "<p>This is a test email to verify the Resend API integration.</p>",
    });

    if (error) {
      console.error("Failed to send test email:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send test email" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      data,
    });
  } catch (error) {
    console.error("Failed to send test email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
      },
      { status: 500 },
    );
  }
}
