const dotenv=require('dotenv');
const path=require('path');
const joi=require('joi')

dotenv.config({path:path.join(__dirname, '../../.env')});

const envVarsSchema=joi.Object().keys({
    JWT_SECRET:joi.string().required(),
    JWT_ACCESS_EXPIRATION_MINUTES:joi.number().default(10).required()

}).unknown();

const {error,value:envVars}=envVarsSchema.validate(process.env)
module.export={
    jwt:{
        secret:process.env.JWT_SECRET,
        expiresIn:process.env.JWT_ACCESS_EXPIRATION_MINUTES
    }
}
