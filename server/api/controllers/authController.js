const asyncHandler=require('express-async-handler');
const httpStatus=require('http-status');
const authService=require('../../services');
const User=require('../../models/userModel');
const sendToken=require('../../utils/jwtToken');
const {authService,userService}=require('../../services');


const register=asyncHandler(async(req,res,next)=>{
    const user=await userService.createUser(req.body);
    const tokens=await tokenService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send({
      user,
      tokens
    })


    
});

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens=await tokenService.generateAuthTokens(user);
    res.send({
      success:true,
      user,
      tokens
    })
  });

const logoutUser= asyncHandler(async (req, res, next)=>{
  await authService.logoutUser(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

  



   

module.exports={register,loginUser,logoutUser};

