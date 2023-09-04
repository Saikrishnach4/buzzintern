const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  buzzname: {
    type: String,
    required: true,
  },
  cohorts: [
    {
      name: String,
      category: String,
      image: String,
   
    }
  ]
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
