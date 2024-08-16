const {strategy:JwtStrategy,ExtractJwt}=require('passport-jwt');
const config=require('./config/config');
const {User}=require('./models/');
const {tokenTypes}=require('./tokens');
const APIError=require('./errors/apiError');
const jwtOptions={
    secretorKey:config.jwt.secret,
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
const jwtStrategy=new strategy(jwtOptions,jwtVerify);

module.exports={
    jwtStrategy
}