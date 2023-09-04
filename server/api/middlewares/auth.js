const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const User=require('../../models/userModel');

module.exports={
    validateAuthentication:asyncHandler(async(req,res,next)=>{
     let token;
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
        if(!token){
            res.status(401);
            next(new Error('Login to the website first!'))
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log("Line 15:",decoded)
        req.user=await User.findById(decoded.id);
        console.log("Line 16:",req.user)
        next();
     }
    })
}
