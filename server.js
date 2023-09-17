// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors'); 
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3001;

// // Enable CORS 
// app.use(cors({ origin: 'http://localhost:3000' }));

// // Parse JSON 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// // static file access last 
// app.use(express.static(path.join(__dirname,'./client/built')));


// //  transporter for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', //  service provider
//   auth: {
//     user: 'kunalnakashe8@gmail.com', 
//     pass: 'jdvg nzab wymb wgek', 
//   },
// });

// // route to handle form submissions
// app.post('/api/send-email', async (req, res) => {
//   const { name, email, msg } = req.body;

//   // last 
//   app.get('*',function(req,res){
//       res.sendFile(path.join(__dirname,'./portfolio/build/index.html'))
//   })
  
//   // Email configuration
//   const mailOptions = {
//     from: 'kunalnakashe8@gmail.com',
//     to: 'kunalnakashe8@gmail.com',
//     subject: 'New Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// });

// // listening
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file access last
app.use(express.static(path.join(__dirname, './client/built')));

// Transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kunalnakashe8@gmail.com',
    pass: 'jdvg nzab wymb wgek',
  },
});

// Route to handle form submissions
app.post('/api/send-email', async (req, res) => {
  const { name, email, msg } = req.body;

  // Email configuration
  const mailOptions = {
    from: 'kunalnakashe8@gmail.com',
    to: 'kunalnakashe8@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Serve your frontend build
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/built/index.html'));
});

// Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
