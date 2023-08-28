const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const influencerRoutes = require('./routes/influencer');
const db = require('./db');
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


app.get('/details', authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId; // Assuming you have userId in the token payload
    console.log("hello",userId)
    const user = await User.findById(userId);
      console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userDetails = {
      email: user.email,
      buzzname: user.buzzname,
      name: user.name,
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
