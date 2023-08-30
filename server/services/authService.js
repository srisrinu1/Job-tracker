const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');

module.exports={

    //@desc Register a new user
    //@route /api/user/register
    //@access public
    registerUser:async function(data){
       return await User.create(data);
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