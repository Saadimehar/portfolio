import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please check server configuration.',
          details: 'Missing SMTP credentials in environment variables'
        },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Email to you (owner)
    const ownerEmail = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_USER, // Send to your email
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from Your Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Reply directly to ${email} to contact this person.
          </p>
        </div>
      `,
    };

    // Confirmation email to visitor
    const visitorEmail = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'We received your message - Muhammad Saad',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out! 🙌</h2>
          
          <p>Hi ${name},</p>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for sending a message through my portfolio website. I've received your inquiry about:
          </p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            I'll review your message and get back to you as soon as possible. 
            I typically respond within 24-48 hours.
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            If you need to reach me urgently, feel free to connect with me on:
          </p>
          
          <ul style="color: #555;">
            <li>Email: saad49861@gmail.com</li>
            <li>LinkedIn: linkedin.com/in/muhammadsaad</li>
            <li>GitHub: github.com/Saadimehar</li>
          </ul>
          
          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            This is an automated confirmation email. Please do not reply to this email address.
          </p>
        </div>
      `,
    };

    // Send both emails
    const [ownerResult, visitorResult] = await Promise.all([
      transporter.sendMail(ownerEmail),
      transporter.sendMail(visitorEmail),
    ]);

    console.log('Emails sent successfully:', { ownerResult, visitorResult });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully! You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
