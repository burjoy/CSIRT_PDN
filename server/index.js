const {google} = require('googleapis');

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3000;
const {LoginGoogleController} = require('./controller/GoogleLoginController');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/google/auth/callback"
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  include_granted_scopes: true
});

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Goole login
app.get('/auth/google', (req, res) => {
  res.redirect(authUrl);
});
//Diatas hanya testing, inget tar pindahin ke controller
//Dibawah ini juga testing, nanti pindahin ke controller

//Google redirect if failed
app.get('/google/auth/callback', LoginGoogleController);

app.use('/forms', require('./routes/uploadForm'));
app.use('/register', require('./routes/register'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});