const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Influencer = require('../models/Influencer');

const router = express.Router();

// User registration
router.post('/user/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if the email already exists in the Influencer collection
    const existingInfluencer = await Influencer.findOne({ email });
    if (existingInfluencer) {
      return res.status(400).json({ error: 'Email is already registered as an influencer' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Influencer registration
router.post('/influencer/register', async (req, res) => {
  try {
    const { email, password } = req.body;
     console.log(email,password)
    // Check if the email already exists in the User collection
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered as a user' });
    }

    const existingInfluencer = await Influencer.findOne({ email });
    if (existingInfluencer) {
      return res.status(400).json({ error: 'Influencer with this email already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newInfluencer = new Influencer({ email, password: hashedPassword });
    await newInfluencer.save();
    
    res.status(201).json({ message: 'Influencer registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering influencer' });
  }
});




router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists as a regular user
    const user = await User.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ userId: user._id, userType: 'user' }, 'krishna');
        console.log('User logged in:', user.email);
        return res.status(200).json({ token, userType: 'user' });
      }
    }

    // Check if the user exists as an influencer
    const influencer = await Influencer.findOne({ email });
    if (influencer) {
      const isPasswordValid = await bcrypt.compare(password, influencer.password);
      if (isPasswordValid) {
        const token = jwt.sign({ userId: influencer._id, userType: 'influencer' }, 'krishna');
        console.log('Influencer logged in:', influencer.email);
        return res.status(200).json({ token, userType: 'influencer' });
      }
    }

    res.status(400).json({ error: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});



module.exports = router;
