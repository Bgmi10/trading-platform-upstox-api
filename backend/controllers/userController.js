const authService = require('../services/authServices');

exports.getUserProfile = async (req, res) => {
  try {
    const userProfile = await authService.fetchUserProfile(req.headers.authorization);
    res.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    res.status(500).send('Error fetching user profile');
  }
};
