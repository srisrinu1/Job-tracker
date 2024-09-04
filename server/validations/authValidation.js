const joi=require('joi');
const passwordValidator=require('./customValidation');
const register={
    body:joi.object().keys({
        email:joi.string().required().email().messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
        password:joi.string().required().custom(passwordValidator).messages({
            'any.required': 'Password is required',
        }),
        name:joi.string().required().messages({
            'any.required': 'Name is required',
        }),
        role:joi.string().valid('user', 'admin').required().messages({
            'any.only': 'Role must be either user or admin',
            'any.required': 'Role is required',
        }),
    })
}

const login={
    body: joi.object().keys({
        email: joi.string().required().email().messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
        password: joi.string().required().custom(passwordValidator).messages({
            'any.required': 'Password is required',
        }),
        role: joi.string().valid('user', 'admin').optional().messages({
            'any.only': 'Role must be either user or admin',
        }),
    }),
}

const logout={
    body:joi.object().keys({
        refreshAuthToken:joi.string().required()
    })
}

module.exports={
    register,
    login,
    logout
}