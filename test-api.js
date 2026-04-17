// Test the /api/contact endpoint
async function testContactAPI() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message"
  };

  try {
    console.log('📤 Sending test request to /api/contact...');
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('✅ Response received:', result);
    console.log('📊 Status:', response.status);
    
    if (result.ok) {
      console.log('✓ API working correctly!');
    } else {
      console.log('❌ API returned error:', result.error);
    }
  } catch (error) {
    console.error('❌ Error testing API:', error);
  }
}

testContactAPI();
