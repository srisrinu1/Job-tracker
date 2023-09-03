const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');

module.exports={

    //@desc Register a new user
    //@route /api/users/register
    //@access public
    registerUser:async function(data){

       return await User.create(data);


    },
    findUser:async function(data){
      const {name}=data;
      const userAvailable=await User.findOne({name});
      return userAvailable
    },

    //@desc login into the account
    //@route /api/users/login
    //@access public
    loginUser:async(email,password)=>{
      if(!email || !password){
        return {
          success:false,
          message:'Both email and password is required',
          statusCode:400

        }
      }

        const user=await User.findOne({email}).select('+password');
        if(!user){
          return {
            success:false,
            message:'Invalid credentials',
            statusCode:401,

          }
        }
        return {
          success:true,
          message:'user found!',
          statusCode:200,
          user
        }

     },
    logoutUser:async function(data){

     },
    resetPassword:async function(data){

     },
}