const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Influencer = require('../models/Influencer');

const router = express.Router();


router.post('/user/signup', async (req, res) => {
  try {
    const { email, password,name,buzzname } = req.body;


    const existingInfluencer = await Influencer.findOne({ email });
    if (existingInfluencer) {
      return res.status(400).json({ error: 'Email is already registered as an influencer' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword,name,buzzname });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, userType: 'user' }, 'krishna', { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});


router.post('/influencer/register', async (req, res) => {
  try {
    const { email, password,name,buzzname } = req.body;
   console.log(email)
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered as a user' });
    }

    const existingInfluencer = await Influencer.findOne({ email });
    if (existingInfluencer) {
      return res.status(400).json({ error: 'Influencer with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newInfluencer = new Influencer({ email, password: hashedPassword,name,buzzname });
    await newInfluencer.save();

   
    const token = jwt.sign({ userId: newInfluencer._id, userType: 'influencer' }, 'krishna', { expiresIn: '1h' });

    res.status(201).json({ message: 'Influencer registered successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Error registering influencer' });
  }
});





router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ userId: user._id, userType: 'user' }, 'krishna');
        console.log('User logged in:', user.email);
        return res.status(200).json({ token, userType: 'user' });
      }
    }

   
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
