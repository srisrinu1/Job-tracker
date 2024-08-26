const joi=require('joi');
const passwordValidator=require('./customValidation');
const register={
    body:joi.object().keys({
        email:joi.string().required().email(),
        password:joi.string().required().custom(passwordValidator),
        name:joi.string().required(),
    })
}

module.exports={
    register
}