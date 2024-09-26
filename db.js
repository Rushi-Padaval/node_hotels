const mongoose = require('mongoose');

// Correct the MongoDB connection URL (remove the leading space)
const mongoURL = 'mongodb+srv://rushikeshpadaval:XAQlB35lEqUTTB0x@selfcluster0.rahg5.mongodb.net/?retryWrites=true&w=majority&appName=SelfCluster0';

// Set up MongoDB connection using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Get the default connection
const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Export the database connection
module.exports = db;
