const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const mailOptions = {
  from: 'maria.julia.jarv@gmail.com',
  to: 'mjum473@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from GitHub Actions.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
