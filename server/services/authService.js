const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');

module.exports={

    //@desc Register a new user
    //@route /api/user/register
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
    //@route /api/user/login
    //@access public
    loginUser:async function(data){

     },
    logoutUser:async function(data){

     },
    resetPassword:async function(data){

     },
}