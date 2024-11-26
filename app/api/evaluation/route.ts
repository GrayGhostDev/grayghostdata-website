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
    const { serviceType, score, totalQuestions, answers } = await req.json();

    const percentage = (score / totalQuestions) * 100;
    let assessmentLevel = '';
    let recommendations = [];

    if (percentage >= 75) {
      assessmentLevel = 'Advanced';
      recommendations = [
        'Consider advanced security monitoring tools',
        'Implement AI-powered threat detection',
        'Develop incident response automation'
      ];
    } else if (percentage >= 50) {
      assessmentLevel = 'Intermediate';
      recommendations = [
        'Enhance security training programs',
        'Upgrade security infrastructure',
        'Implement additional security controls'
      ];
    } else {
      assessmentLevel = 'Basic';
      recommendations = [
        'Establish basic security policies',
        'Implement essential security controls',
        'Start regular security training'
      ];
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'curtis@grayghostdata.com',
      subject: `New ${serviceType} Assessment Completed`,
      text: `
Assessment Results:
Service: ${serviceType}
Score: ${score}/${totalQuestions} (${percentage}%)
Level: ${assessmentLevel}

Recommendations:
${recommendations.map(rec => `- ${rec}`).join('\n')}

Detailed Answers:
${answers.map((answer: any, index: number) => 
  `Q${index + 1}: ${answer.selected} (${answer.correct ? 'Correct' : 'Incorrect'})`
).join('\n')}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0f172a;">New ${serviceType} Assessment Results</h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Score:</strong> ${score}/${totalQuestions} (${percentage}%)</p>
    <p style="margin: 10px 0;"><strong>Level:</strong> ${assessmentLevel}</p>
  </div>

  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #0f172a; margin-top: 0;">Recommendations:</h3>
    <ul>
      ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
    </ul>
  </div>

  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
    <h3 style="color: #0f172a; margin-top: 0;">Detailed Answers:</h3>
    ${answers.map((answer: any, index: number) => `
      <p style="margin: 10px 0;">
        <strong>Q${index + 1}:</strong> ${answer.selected}
        <span style="color: ${answer.correct ? '#16a34a' : '#dc2626'}">
          (${answer.correct ? 'Correct' : 'Incorrect'})
        </span>
      </p>
    `).join('')}
  </div>
</div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Assessment results processed successfully',
      level: assessmentLevel,
      recommendations
    });
  } catch (error) {
    console.error('Failed to process assessment:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process assessment' 
      },
      { status: 500 }
    );
  }
}
