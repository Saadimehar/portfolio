import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      console.error('Missing required fields:', { name, email, subject, message });
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Forward to Formspree (server-side to avoid CORS issues)
    const formspreeEndpoint = 'https://formspree.io/f/mgoranwp';
    
    const payload = new FormData();
    payload.append('email', email);
    payload.append('name', name);
    payload.append('subject', subject);
    payload.append('message', message);
    payload.append('_subject', `New message from ${name}: ${subject}`);
    payload.append('_replyto', email);

    console.log('📤 Forwarding to Formspree:', {
      endpoint: formspreeEndpoint,
      formData: { email, name, subject }
    });

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: payload,
    });

    const formspreeData = await formspreeResponse.json();
    console.log('Formspree response:', { status: formspreeResponse.status, data: formspreeData });

    if (formspreeResponse.ok && formspreeData.ok) {
      console.log('✅ Successfully forwarded to Formspree');
      return NextResponse.json(
        { 
          ok: true, 
          message: 'Message submitted successfully. Sending to saad49861@gmail.com via Formspree.' 
        },
        { status: 200 }
      );
    } else {
      const errorMsg = formspreeData.error || 'Formspree rejected the submission';
      console.error('❌ Formspree error:', errorMsg, formspreeData);
      
      return NextResponse.json(
        { 
          ok: false, 
          error: errorMsg,
          details: formspreeData
        },
        { status: formspreeResponse.status || 400 }
      );
    }
  } catch (error) {
    console.error('❌ Contact form API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { 
        ok: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      console.error('Missing required fields:', { name, email, subject, message });
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Forward to Formspree (server-side to avoid CORS issues)
    const formspreeEndpoint = 'https://formspree.io/f/mgoranwp';
    
    const payload = new FormData();
    payload.append('email', email);
    payload.append('name', name);
    payload.append('subject', subject);
    payload.append('message', message);
    payload.append('_subject', `New message from ${name}: ${subject}`);
    payload.append('_replyto', email);

    console.log('Forwarding to Formspree:', {
      endpoint: formspreeEndpoint,
      formData: { email, name, subject, message }
    });

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: payload,
    });

    const formspreeData = await formspreeResponse.json();
    console.log('Formspree response:', { status: formspreeResponse.status, data: formspreeData });

    if (formspreeResponse.ok && formspreeData.ok) {
      console.log('✅ Successfully sent to Formspree');
      return NextResponse.json(
        { 
          ok: true, 
          message: 'Message submitted successfully. You will receive a confirmation email.' 
        },
        { status: 200 }
      );
    } else {
      const errorMsg = formspreeData.error || 'Formspree rejected the submission';
      console.error('❌ Formspree error:', errorMsg);
      return NextResponse.json(
        { 
          ok: false, 
          error: errorMsg,
          details: formspreeData,
          troubleshooting: {
            step1: 'Verify form is ACTIVE at https://formspree.io/f/mgoranwp',
            step2: 'Confirm saad49861@gmail.com is set as recipient',
            step3: 'Check for unverified email in Formspree settings',
          }
        },
        { status: formspreeResponse.status || 400 }
      );
    }
  } catch (error) {
    console.error('❌ Contact form API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { 
        ok: false, 
        error: errorMessage,
        type: error instanceof Error ? error.constructor.name : 'Unknown'
      },
      { status: 500 }
    );
  }
}
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
