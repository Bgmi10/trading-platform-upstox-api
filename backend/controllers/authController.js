const axios = require('axios');
const querystring = require('querystring');
const { apiKey, apiSecret, redirectUri } = require('../config/apiConfig'); // Update path as necessary

let accessToken = '';

exports.authCallback = async (req, res) => {
  const code = req.query.code;
  if (!code) {
    res.send('No code provided');
    return;
  }

  try {
    const response = await axios.post('https://api-v2.upstox.com/login/authorization/token', querystring.stringify({
      code,
      redirect_uri: redirectUri,
      client_id: apiKey,
      client_secret: apiSecret,
      grant_type: 'authorization_code',
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    accessToken = response.data.access_token;
    res.send('Authentication successful');
  } catch (error) {
    console.error('Error authenticating:', error.response ? error.response.data : error.message);
    res.send(`Error authenticating: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
};

exports.getAccessToken = () => accessToken;
