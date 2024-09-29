
const express = require('express');
const app = express();
const db = require ('./db');
const passport = require('./auth');
require('dotenv').config();




const bodyParser = require ('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;


//middleware function 
app.use (passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

const logRequest =( req , res , next )=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next() ;
  
};

 app.get ('/',  localAuthMiddleware,   function (req, res){
  res.send('Welcome to our hotel');
 })
 // import the personRouter file 
const personRoutes = require ('./routes/personRoutes');
const menuRoutes = require ('./routes/menuRoutes');

// import the menuItems
app.use('/menuItem', localAuthMiddleware, menuRoutes);
app.use('/person', localAuthMiddleware,  personRoutes);



app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
} )
