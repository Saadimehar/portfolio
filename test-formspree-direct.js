// Direct Formspree test
const params = new URLSearchParams();
params.append('email', 'test@example.com');
params.append('name', 'Test User');
params.append('subject', 'Test Subject');
params.append('message', 'This is a test message');
params.append('_replyto', 'test@example.com');

fetch('https://formspree.io/f/mgoranwp', {
  method: 'POST',
  body: params,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(r => {
  console.log('Status:', r.status);
  console.log('Headers:', Object.fromEntries(r.headers));
  return r.text();
})
.then(text => {
  console.log('Response (first 500 chars):', text.substring(0, 500));
  try {
    const json = JSON.parse(text);
    console.log('JSON:', json);
  } catch (e) {
    console.log('Not valid JSON');
  }
})
.catch(e => console.error('Error:', e));
