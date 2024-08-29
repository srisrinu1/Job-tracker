const asyncHandler=require('express-async-handler');
const httpStatus=require('http-status');
const User=require('../../models/userModel');
const sendToken=require('../../utils/jwtToken');
const {authService,userService,tokenService}=require('../../services');

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
  const tokens = await tokenService.generateAuthTokens(user);
  res.cookie('accessToken',tokens.access.token,{
    httpOnly: true,
      secure: true,
      maxAge:tokens.access.expires.getTime()-Date.now(),
      sameSite:'strict'
  }).
  cookie('refreshToken',tokens.refresh.token,{
        httpOnly: true,
        secure:true,
        maxAge:tokens.refresh.expires.getTime()-Date.now(),
        sameSite:'strict'
      })
  res.send({ user});
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

});


module.exports={
  register,
  loginUser,
  logoutUser,
  refreshTokens};



  



   

module.exports={
  register,
  loginUser,
  logoutUser,
  refreshTokens};

