






const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
  const mongoURL = "mongodb://127.0.0.1:27017/hotels";
 
//const mongoURL = process.env.MONGODB_URL ;



// Set up MongoDB connection
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
