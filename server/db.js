const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saikrishnachippa4:J3c9ybdD6RsbpXu7@cluster0.5lzs43b.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
