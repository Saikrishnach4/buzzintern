const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  buzzname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Influencer = mongoose.model('Influencer', influencerSchema);

module.exports = Influencer;
