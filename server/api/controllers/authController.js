const asyncHandler=require('express-async-handler');
const httpStatus=require('http-status');
const authService=require('../../services');
const User=require('../../models/userModel');
const sendToken=require('../../utils/jwtToken');
const {authService,userService}=require('../../services');

//Register a new user
const register=asyncHandler(async(req,res,next)=>{
    const user=await userService.createUser(req.body);
    const tokens=await tokenService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send({
      user,
      tokens
    })


    
});

//Login a user with email and password
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

//Logout a user
const logoutUser= asyncHandler(async (req, res, next)=>{
  await authService.logoutUser(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

//Refresh auth tokens
const refreshTokens=asyncHandler(async(req,res)=>{
  const tokens=await authService.refreshAuth(req.body.refreshToken);
  res.send({...tokens});

})


  



   

module.exports={
  register,
  loginUser,
  logoutUser,
  refreshTokens};

