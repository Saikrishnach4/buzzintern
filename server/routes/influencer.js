const express = require('express');
const jwt = require('jsonwebtoken');
const Influencer = require('../models/Influencer');

const router = express.Router();

// Protected route for influencers
router.get('/dashboard', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, 'krishna');
    if (decodedToken) {
      const influencer = await Influencer.findById(decodedToken.id);
      if (influencer) {
        // Do something for influencer dashboard
        res.json({ message: 'Welcome to the influencer dashboard' });
      } else {
        res.status(404).json({ error: 'Influencer not found' });
      }
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Token verification failed' });
  }
});

module.exports = router;
