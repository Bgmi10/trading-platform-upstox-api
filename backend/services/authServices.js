const axios = require('axios');

exports.fetchUserProfile = async (authHeader) => {
  const response = await axios.get('https://api.upstox.com/v2/user/profile', {
    headers: { Authorization: authHeader }
  });
  return response.data;
};
