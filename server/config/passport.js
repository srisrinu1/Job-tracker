const {Strategy:JwtStrategy,ExtractJwt}=require('passport-jwt');
const config=require('./config');
const {User}=require('../models');
const {tokenTypes}=require('./token');
const APIError=require('../../server/utils/APIError');

console.log(config.jwt.secret);
const jwtOptions={
    secretOrKey:config.jwt.secret,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtVerify=async(jwtPayload)=>{
    //Check if user exists in the database

    try{
    if(jwtPayload.type!==tokenTypes.ACCESS){
       throw new Error('Invalid token type');
    }
    const user=await  User.findOne(jwtPayload.sub);
    if(!user){
        return done(null,false);
    }
    done(null,user);
}
catch(error){
    done(error,false)
}

}
const jwtStrategy=new JwtStrategy(jwtOptions,jwtVerify);

module.exports={
    jwtStrategy
}