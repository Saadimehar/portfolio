import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email' },
        { status: 400 }
      );
    }

    const endpoint = 'https://formspree.io/f/mgoranwp';
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('name', name);
    params.append('subject', subject);
    params.append('message', message);
    params.append('_replyto', email);

    const res = await fetch(endpoint, { 
      method: 'POST', 
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const contentType = res.headers.get('content-type');
    
    // Check if response is JSON
    if (!contentType?.includes('application/json')) {
      console.error('Formspree returned non-JSON response:', contentType);
      console.error('Status:', res.status);
      console.error('This usually means:');
      console.error('1. Form ID mgoranwp does not exist in Formspree');
      console.error('2. Formspree account is not configured properly');
      console.error('3. Recipient email saad49861@gmail.com is not verified');
      
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Formspree not configured. Check: https://formspree.io/f/mgoranwp - form must be Active and recipient email verified',
          details: 'Formspree returned HTML instead of JSON (status: ' + res.status + ')'
        },
        { status: 503 }
      );
    }

    const json = await res.json();

    if (res.ok && json.ok) {
      return NextResponse.json(
        { ok: true, message: 'Submitted' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { ok: false, error: json.error || 'Failed' },
      { status: res.status || 400 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Error' },
      { status: 500 }
    );
  }
}

