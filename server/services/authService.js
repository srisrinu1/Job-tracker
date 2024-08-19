const httpStatus=require('http-status');
const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');
const userService=require('../services/userService');
const APIError=require('../utils/APIError');


//@desc login into the account
//@route /api/users/login
//@access public
const loginUserWithEmailAndPassword=asyncHandler(async(email,password)=>{
      const user=await userService.getUserByEmail(email);
      if(!user ||(await user.validatePassword(password))){
        throw new APIError(httpStatus.UNAUTHORIZED,'Invalid credentials');
      }
      return {
        success:true,
        user
      }


});

//@desc logout from the account
//@route /api/users/logout
//@access private
const logoutUser=asyncHandler(async(refreshToken)=>{
    const refreshToken=await Token.findOne({token:refreshToken,type: tokenTypes.REFRESH, blacklisted: false });
    if(!refreshToken){
      throw new APIError(httpStatus.INTERNAL_SERVER_ERROR,'Invalid refresh token');
    }
    await refreshToken.remove();
})



module.exports={ 
  loginUserWithEmailAndPassword,
  logoutUser
}