const {Strategy:JwtStrategy,ExtractJwt}=require('passport-jwt');
const config=require('./config');
const {User}=require('../models');
const {tokenTypes}=require('./token');
const APIError=require('../../server/utils/APIError');

console.log("Line7:",config.jwt.secret);
const cookieOrHeaderExtractor=(req)=>{
  let token=null;
  //Check if token is in the httpOny cookie
  if(req && req.cookies && req.cookies.accessToken){
    token=req.cookies.accessToken;
  }
  //Check if token is in the Authorization header
  if(!token && req.headers.authorization &&  req.headers.authorization.startsWith('Bearer ')){
    token=req.headers.authorization.split(' ')[1];
  }
  return token;

}
const jwtOptions = {
    secretOrKey: config.jwt.secret,
    jwtFromRequest:cookieOrHeaderExtractor,
  };
  
  const jwtVerify = async (payload, done) => {
    try {
      if (payload.type !== tokenTypes.ACCESS) {
        throw new Error('Invalid token type');
      }
      const user = await User.findById(payload.sub);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  };
  
  const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
  
  module.exports = {
    jwtStrategy,
  };