const asyncHandler=require('express-async-handler');
const authService=require('../../services/authService');
const User=require('../../models/userModel');
const sendToken=require('../../utils/jwtToken');


const register=asyncHandler(async(req,res,next)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
        res.status(400);
    }
    const userAvailable=await authService.findUser({name,email,password,role});
    console.log("Line 11:",userAvailable);
    console.log(!userAvailable);
    if(!userAvailable){
        const user = await authService.registerUser({ name, email, password, role });
        sendToken(user, 201, res);


     }
     else{
     res.status(409);
     next(new Error("User already exists!"));
     }



});

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    console.log(result);



    if (result.success) {
        const {user,statusCode}=result;
        const isPasswordMatched=await user.validatePassword(password);
        console.log(isPasswordMatched)
        if(!isPasswordMatched){
            res.status(400);
        }
        // const token=await user.getJWT();
        // res.status(statusCode).json({
        //     success:true,
        //     message:'Successfully logged in',
        //     token
        // });
        console.log("Line 55:",user)
        sendToken(user,200,res)



    } else{
      res.status(result.statusCode);
      next(new Error('Something went wrong!'))

    }



  });



module.exports={register,loginUser}

