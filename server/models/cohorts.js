const mongoose = require('mongoose');

const cohortSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  // Other cohort details
});

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;
