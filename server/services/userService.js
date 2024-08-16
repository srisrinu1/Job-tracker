const httpStatus = require('http-status');
const {User}=require('../models');
const asyncHandler = require('express-async-handler');
const APIError = require('../utils/APIError');

const createUser=asyncHandler(async(userBody)=>{
    if(!userBody.name ||!userBody.email ||!userBody.password){
        throw new APIError(httpStatus.BAD_REQUEST,'Missing required fields');
    }

    if(await User.isEmailRegistered(userBody.email)){
        throw new APIError(httpStatus.CONFLICT,'Email already registered');
    }
    return User.Create(userBody);

});

//Retreive user by email
const getUserByEmail=asyncHandler(async(email)=>{
    return await User.findOne({email});
});

//Retreive user by id
const getUserById=asyncHandler(async(id)=>{
    return await User.findById(id);
});

//Update user by id
const updateUserById=asyncHandler(async(id,updateBody)=>{
    const user=await getUserById(id);
    if(!user){
        throw new APIError(httpStatus.NOT_FOUND,'user not found');
    }
    if(updateBody.email && await user.isEmailRegistered(updateBody.email)){
        throw new APIError(httpStatus.CONFLICT,'Email already registered');
    }
    Object.assign(user,updateBody);
    return await user.save();
});

//Delete user by id

const deleteUserById=asyncHandler(async(id)=>{
    const user=await getUserById(id);
    if(!user){
        throw new APIError(httpStatus.NOT_FOUND,'user not found');
    }
    await user.remove();
    return user;
});

module.exports={
    createUser,
    getUserByEmail,
    getUserById,
    updateUserById,
    deleteUserById,
 };

