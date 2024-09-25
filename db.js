const mongoose = require('mongoose');

// define mongo connection url
const mongoURL = 'mongodb://localhost:27017/hotels '


//set up mongo connection 
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


//get the default connection  
const db = mongoose.connection ; 


// defining the event listener in the database
// Defining the event listener in the database
db.on('connected', () => {
    console.log('Connected to MongoDB server');
  });
  
  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
  });
  
  db.on('error', (error) => {
    console.log('MongoDB connection error:', error);
  });
  

        //export database connection 
        module.exports = db ;