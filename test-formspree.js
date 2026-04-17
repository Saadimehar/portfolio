// Test script to verify Formspree endpoint
const https = require('https');

const testData = {
  email: 'test@example.com',
  name: 'Test User',
  subject: 'Test Subject',
  message: 'This is a test message'
};

const payload = JSON.stringify(testData);

const options = {
  hostname: 'formspree.io',
  path: '/f/mgoranwp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
    'Accept': 'application/json'
  }
};

console.log('📤 Testing Formspree endpoint...');
console.log('Endpoint: https://formspree.io/f/mgoranwp');
console.log('Payload:', testData);
console.log('\n---\n');

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('\nResponse Body:', data);
    try {
      const parsed = JSON.parse(data);
      console.log('\nParsed Response:', parsed);
      
      if (parsed.ok) {
        console.log('\n✅ SUCCESS - Form accepted by Formspree!');
      } else {
        console.log('\n❌ FAILED - Formspree rejected the submission');
        if (parsed.error) {
          console.log('Error:', parsed.error);
        }
      }
    } catch (e) {
      console.log('\n⚠️ Could not parse response as JSON');
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Request error:', e.message);
});

req.write(payload);
req.end();
