const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/callback', authController.authCallback);

module.exports = router;
