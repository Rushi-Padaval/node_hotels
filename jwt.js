const jwt = require ('jsonwebtoken')

const jwtAuthMiddleware = (req, res, next) => {
// extract the jwt token from the request header 
const token = req.headers.authorization.spilit(' ') [1] ;
if (!token) return res.status (401).json ({error: 'Unauthorized'})


    try {
       // Verify the token using the secret key stored in environment variable
       const decoded = jwt.verify (token , process.env .JWT_SECRET);
       
       // attach user information to the requested token 
       req.user = decoded 
       next ();
    }
    catch (err){
        console.error(err);
        res.status(401).json({error:'Invalid token '});
        
    }
}

//Function to generate JWT token 
const generateToken = (userData) => {
    //Generate a new JWT token using user data 
    return jwt.sign (userData, process.env.JWT_SECRET);
}


Module.exports = {jwtAuthMiddleware, generateToken} ;