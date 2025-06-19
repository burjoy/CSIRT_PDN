require('dotenv').config();
const { google } = require('googleapis');
const fsPromises = require('fs').promises;
const path = require('path'); 
const usersDB = {
    users_action: function (data) { this.users = data },
    users: require('../../model/mode_user.json')
}

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

const LoginGoogleController = async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();

    if (!userInfo.data.email || !userInfo.data.name) {
      return res.json({ data: userInfo.data });
    }

    // Handle the user information as needed
    // res.json(userInfo.data);
    let foundUser = usersDB.users.find(user => user.email === userInfo.data.email);
    if (!foundUser) {
      const newUser = {
        username: userInfo.data.name,
        email: userInfo.data.email,
        roles: ['user'], // Default role, can be changed later
      };
      usersDB.users_action([...usersDB.users, newUser]);
      await fsPromises.writeFile(
        path.join(__dirname, '../../model/mode_user.json'), 
        JSON.stringify(usersDB.users, null, 2)
      );
      foundUser = newUser;
    }
  } catch (error) {
    console.error('Error during Google authentication:', error);
    res.status(500).send('Authentication failed');
  }
  return res.json({ message: 'Login successful' });
}

module.exports = { LoginGoogleController };