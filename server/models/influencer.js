const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  // Other video details
});

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
  name: {
    type: String,
    required: true,
  },
  buzzname: {
    type: String,
    required: true,
  },
  videos: [videoSchema], // Embed videos within influencer schema
});

const Influencer = mongoose.model('Influencer', influencerSchema);

module.exports = Influencer;
