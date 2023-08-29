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
    
    req.userType = decoded.userType; // Store user type in request
    next(); // Continue to the next middleware or route handler
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
    const userId = decodedToken.userId; // Assuming you have userId in the token payload
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
      // Add more user details as needed
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
    // Decode the token to get the user's ID
    const decodedToken = jwt.verify(token, 'krishna'); // Replace with your actual secret key
    const userId = decodedToken.userId;

    // Check if the user is already enrolled in the selected cohort
    const user = await User.findById(userId);
    const isEnrolled = user.cohorts.some(cohort => {
      return cohort.name === cohortDetails.name; // Adjust the condition based on your cohort's identifying attribute
    });

    if (isEnrolled) {
      return res.status(400).json({ error: 'User is already enrolled in this cohort' });
    }

    // Update the user's cohorts array with the new cohort details
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { cohorts: cohortDetails } },
      { new: true } // Return the updated user document
    );

    console.log('User enrolled in cohort:', updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    console.error('Error enrolling in cohort:', error);
    res.status(500).json({ error: 'Error enrolling in cohort' });
  }
});
app.get('/enrolled-cohorts', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; // Extract token from Authorization header

  try {
    // Decode the token to get the user's ID
    const decodedToken = jwt.verify(token, 'krishna'); // Replace with your actual secret key
    const userId = decodedToken.userId;
   
    // Fetch the user's enrolled cohorts from the database
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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
