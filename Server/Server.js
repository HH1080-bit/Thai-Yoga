const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');











// Endpoint for handling the send-email POST request
app.post('/send-email', async (req, res) => {
  const { name, email } = req.body;

  const msg = {
    to: email,
    from: 'j7089366@gmail.com',
    subject: 'Test Email',
    text: `This is a test email sent using SendGrid to${name} .`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
  // Return a response to the client
  res.json({ message: 'Email sent successfully!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
