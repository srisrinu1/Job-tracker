const jwt=require('jsonwebtoken');
const moment = require('moment');
const Token=require('../models/tokenModel');
const config=require('../config/config');
const {tokenTypes}=require('../config/token');


//Generate JWT token
 //id: User id
 //expires: expiration date
 //type: token type (e.g., access, refresh)
 //secret: JWT secret
 //default: JWT secret from config.js
 //returns: JWT token string
const generateJWT=(id,expires,type,secret=config.jwt.secret)=>{
    const payload={
        sub:id,
        iat:moment().unix(),
        type:type,
        expires:expires.unix()
    };
    return jwt.sign(payload,secret);
}

//Saving refresh token to database
 //token: JWT token string
 //userId: User id
 //type: token type (e.g., access, refresh)
 //blacklisted: optional, default: false
 //returns: Promise<Token>
 //throws: Error if token already exists in the database
const saveToken=(token,userId,expires,type,blacklisted=false)=>{
    const newToken=new Token({
        token,
        user:userId,
        type,
        expires:expires.toDate(),
        blacklisted
    });
    return newToken.save();
    }


//Generating access and refresh tokens
//user: User object

const generateAuthTokens=async(user)=>{
    const accessTokenExpires=moment().add(config.jwt.accessTokenExpires,'minutes');
    const refreshTokenExpires=moment().add(config.jwt.refreshExpirationDays,'days');
    const accessToken=generateJWT(user.id,accessTokenExpires,tokenTypes.ACCESS);
    const refreshToken=generateJWT(user.id,refreshTokenExpires,tokenTypes.REFRESH);
    await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);
    return {
        access:{
            token:accessToken,
            expires:accessTokenExpires.toDate()
        },
        refresh:{
            token:refreshToken,
            expires:refreshTokenExpires.toDate()
        }
    }

}

//Verifying the token
 //token: JWT token string
 //secret: JWT secret
 //default: JWT secret from config.js
 //returns: Promise<boolean>
 //throws: Error if token is invalid or expired
const verifyToken=(token,type)=>{
    const payload=jwt.verify(token,config.jwt.secret);
    const tokenDoc=Token.findOne({token,type,user:payload.sub,blacklisted:false});
    if(!tokenDoc){
        throw new Error("Token doesn't exist or is blacklisted");
    }
    return tokenDoc;

}


module.exports={
    generateJWT,
    saveToken,
    generateAuthTokens,
    verifyToken
    
}