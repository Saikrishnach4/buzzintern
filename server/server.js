const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const influencerRoutes = require('./routes/influencer');
const db = require('./db');
const Cohort = require('./models/cohorts');
const User = require('./models/User');
const Influencer = require("./models/Influencer")
const jwt = require("jsonwebtoken")
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/influencers', influencerRoutes);
const secretKey = 'krishna';

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    req.userType = decoded.userType;
    next(); 
  });
};

app.get('/', authMiddleware, (req, res) => {
  if (req.userType === 'influencer') {
    return res.json({ message: 'Welcome to the buzzfluencers page!' });
  } else {
    return res.status(403).json({ message: 'Forbidden' });
  }
});

app.get('/mentors', authMiddleware, (req, res) => {
  if (req.userType === 'user') {
    return res.json({ message: 'Welcome to the mentors page!' });
  } else {
    return res.status(403).json({ message: 'Forbidden' });
  }
});
app.get('/details', authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;
    console.log("hello",userId)
    const user = await User.findById(userId);
      console.log(user.name)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userDetails = {
      email: user.email,
      buzzname: user.buzzname,
      name: user.name,
      buzzname:user.buzzname
      
    };

    res.json(userDetails);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Error fetching user details' });
  }
});
app.post('/selected', async (req, res) => {
  const { token, cohortDetails } = req.body;

  try {
   
    const decodedToken = jwt.verify(token, 'krishna'); 
    const userId = decodedToken.userId;


    const user = await User.findById(userId);
    const isEnrolled = user.cohorts.some(cohort => {
      return cohort.name === cohortDetails.name; 
    });

    if (isEnrolled) {
      return res.status(400).json({ error: 'User is already enrolled in this cohort' });
    }

   
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { cohorts: cohortDetails } },
      { new: true } 
    );

    console.log('User enrolled in cohort:', updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    console.error('Error enrolling in cohort:', error);
    res.status(500).json({ error: 'Error enrolling in cohort' });
  }
});
app.get('/enrolled-cohorts', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; 

  try {
    
    const decodedToken = jwt.verify(token, 'krishna'); 
    const userId = decodedToken.userId;
   
   
    const user = await User.findById(userId);
    const enrolledCohorts = user.cohorts;
   console.log(enrolledCohorts)
    res.status(200).json({ cohorts: enrolledCohorts });
  } catch (error) {
    console.error('Error fetching enrolled cohorts:', error);
    res.status(500).json({ error: 'Error fetching enrolled cohorts' });
  }
});
app.get('/influencerdetails', authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId; // Assuming you have userId in the token payload
    console.log("hello", userId)
    const influencer = await Influencer.findById(userId);
    console.log(influencer.name)
    
    if (!influencer) {
      return res.status(404).json({ message: 'Influencer not found' });
    }

    const influencerDetails = {
      email: influencer.email,
      buzzname: influencer.buzzname,
      name: influencer.name,
      // Add more influencer details as needed
    };

    res.json(influencerDetails);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    console.error('Error fetching influencer details:', error);
    res.status(500).json({ error: 'Error fetching influencer details' });
  }
});
// Fetch influencer details using token
app.get('/influencerdata', authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secretKey);
    const influencerId = decodedToken.userId;

    const influencer = await Influencer.findById(influencerId);
  
    if (!influencer) {
      return res.status(404).json({ message: 'Influencer not found' });
    }

    const influencerDetails = {
      email: influencer.email,
      buzzname: influencer.buzzname,
      name: influencer.name,
      // Add more influencer details as needed
    };

   
    const enrolledUsers = await User.find({ 'cohorts.name': influencer.name });
    // console.log('Enrolled Users:', enrolledUsers);
    res.json({ influencer: influencerDetails, enrolledUsers });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    console.error('Error fetching influencer details:', error);
    res.status(500).json({ error: 'Error fetching influencer details' });
  }
});

// Assuming you have a model named 'Influencer' for influencers
app.get('/influencer/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const influencer = await Influencer.findOne({ email });
    if (!influencer) {
      return res.status(404).json({ error: 'Influencer not found' });
    }

    res.json(influencer);
  } catch (error) {
    console.error('Error fetching influencer data:', error);
    res.status(500).json({ error: 'Error fetching influencer data' });
  }
});


app.get('/influencersdetailsdata', async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.json(influencers);
  } catch (error) {
    console.error('Error fetching influencer data:', error);
    res.status(500).json({ error: 'Error fetching influencer data' });
  }
});
app.use(express.static(path.join(__dirname, 'build')));


app.use('/videos', express.static('videos'));

// Map email addresses to video URLs
const emailToVideoMap = {
  '20d41a0440@gmail.com': '/videos/pexels-peter-fowler-6394054 (2160p).mp4',
  'saikrishnachippa1234@gmail.com': '/videos/pexels-taryn-elliott-8820216 (2160p).mp4',
  '20d41a0441@gmail.com': '/videos/video (2160p).mp4'
};

app.get('/influencervideo', (req, res) => {
  // Get the email from the query parameter
  const email = req.query.email;

  // Look up the video URL based on the email
  const videoUrl = emailToVideoMap[email];

  if (videoUrl) {
    res.json({ videoUrl });
  } else {
    res.status(404).json({ error: 'Video not found for the provided email' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
