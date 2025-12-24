const { Resend } = require('resend');

async function testResend() {
  const apiKey = 're_NZCjiu92_9TRSnQdjywYZZSvASC9pMUim';

  if (!apiKey) {
    console.error('❌ No API key found!');
    return;
  }

  console.log('🔑 API Key found:', apiKey.substring(0, 10) + '...');

  const resend = new Resend(apiKey);

  try {
    console.log('\n📧 Testing email send to morrisonmicheal606@gmail.com...');
    const emailResult = await resend.emails.send({
      from: 'AwnGuard Forms <onboarding@resend.dev>',
      to: ['morrisonmicheal606@gmail.com'],
      subject: 'Test Email from AwnGuard',
      html: '<h1>Test Email</h1><p>This is a test email to verify Resend is working.</p>',
    });
    console.log('✅ Email sent successfully!');
    console.log('Email ID:', emailResult.data?.id);

    console.log('\n📱 Testing SMS send to (310) 893-9219...');
    const smsResult = await resend.emails.send({
      from: 'AwnGuard Forms <onboarding@resend.dev>',
      to: ['3108939219@msg.fi.google.com'],
      subject: '',
      text: 'Test SMS from AwnGuard notification system',
    });
    console.log('✅ SMS sent successfully!');
    console.log('SMS ID:', smsResult.data?.id);

    console.log('\n✅ All tests passed! Check your email and phone.');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', await error.response.text());
    }
  }
}

testResend();
