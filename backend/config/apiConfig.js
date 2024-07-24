require('dotenv').config();

module.exports = {
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  redirectUri: process.env.REDIRECT_URI,
};
