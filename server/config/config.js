const dotenv=require('dotenv');
const path=require('path');
const joi=require('joi')

dotenv.config({path:path.join(__dirname, '../../.env')});

const envVarsSchema=joi.object().keys({
    JWT_SECRET:joi.string().required(),
    JWT_ACCESS_EXPIRATION_MINUTES:joi.number().default(10).required(),
    JWT_REFRESH_EXPIRATION_DAYS:joi.number().default(30).required(),

}).unknown();

const {error,value:envVars}=envVarsSchema.validate(process.env);

console.log(envVars.JWT_SECRET)
module.exports={
    jwt:{
        secret:envVars.JWT_SECRET,
        accessExpirationMinutes:envVars.JWT_ACCESS_EXPIRATION_MINUTES,
        refreshExpirationDays:envVars.JWT_REFRESH_EXPIRATION_DAYS
    }
}
