const asyncHandler=require('express-async-handler');
const authService=require('../../services/authService');

const register=asyncHandler(async(req,res,next)=>{
    const {name,email,password,role}=req.body;
    const user=await authService.registerUser({name,email,password,role});
    res.status(201).json({
        success:true,
        message:'User is registered',
        data:user
    })
});

module.exports={register}

