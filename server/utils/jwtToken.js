//Generate a token, send it to the client, and store it in a cookie
const sendToken=async(user,statusCode,res)=>{
   //create JWT
   const token= user.getJWT();
   //options for cookie
   console.log("Line 6:",process.env.COOKIE_EXPIRY_TIME)
   const options={
    expires:new Date(Date.now()+process.env.COOKIE_EXPIRY_TIME*24*60*60*1000),
    httpOnly:true
   }
   console.log(options)
   res
   .status(statusCode)
   .cookie('token',token,options)
   .json({
    success:true,
    token
   });

}

module.exports=sendToken;