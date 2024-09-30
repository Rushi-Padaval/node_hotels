
const passport = require ('passport') ;
const LocalStrategy = require ('passport-local').Strategy ;
const person = require ('./models/Person');
const bcrypt = require ('bcrypt');



passport.use (new LocalStrategy (async ( username, password, done)=>{

    // authentication logic was here 
    try {
      // console.log('Recieved Credentials:', username, password);
      const user = await person.findOne({username: username}); 
      if (!user)
        return done (null, false, {message : 'Incorrect Password.'} );

      const isPasswordMatch = await user.comparePassword(password);
      
      if (isPasswordMatch){
        return done (null, user);
      }
     else {
      return done(null, false , {message: 'Incorrect password.'});
     }
    }catch (err){
      return done (err);
  
    }
  }));

 
 module.exports = passport ;