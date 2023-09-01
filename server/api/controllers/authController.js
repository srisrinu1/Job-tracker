const asyncHandler=require('express-async-handler');
const authService=require('../../services/authService');
const User=require('../../models/userModel');


const register=asyncHandler(async(req,res,next)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
        res.status(400);
    }
    const userAvailable=await authService.findUser({name,email,password,role});
    console.log("Line 11:",userAvailable);
    console.log(!userAvailable);
    if(!userAvailable){
        const user=await authService.registerUser({name,email,password,role});
        const token=await user.getJWT();
        res.status(201).json({
            success:true,
            message:'User is registered',
            data:user,
            token
        });

     }
     else{
     res.status(409);
     throw new Error("User already exists!");
     }
     next();


});

module.exports={register}

