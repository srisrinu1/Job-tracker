const jwt=require('jsonwebtoken');
const moment = require('moment');

const generateJWT=(id,expires,type,secret=jwt.secret)=>{
    const payload={
        sub:id,
        iat:moment().unix(),
        type:type,
        expires:expires.unix()
    };
    return jwt.sign(payload,secret);
}

module.exports={
    generateJWT
}