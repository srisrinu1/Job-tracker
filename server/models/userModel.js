const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config();

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the username"],
        trim:true

    },
    email:{
        type:String,
        required:[true,"Please enter the email"],
        unique:true,
        lowercase:true,
        trim:true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password:{
        type:String,
        required:[true,"Please enter the password"],
        minlength:[8,'Your password must have atleast 8 characters'],
        trim:true,
        select:false,
        private:true
    },
    role:{
        type:String,
        enum:{
            values:['user','admin'],
            message:'Please select the correct role'

        },
        required:[true,'Please select the role that is required'],
        default:'user'
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpire:{
        type:Date
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    }
},
    {
        timestamps:true
    }
);

//Check if email is already registered
userSchema.statics.isEmailRegistered=async function(email){
    
    const user=await this.findOne({email,_id:{$ne:this._id}});
    return user?true:false;

}

//Encrypt Password before saving
userSchema.pre('save',async function(){
    const user=this;
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,10)
    }
})

//Generate JWT
userSchema.methods.getJWT =  function() {
    return  jwt.sign({ id : this._id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRY_TIME
    });
}

//Compare user password with DB password
userSchema.methods.validatePassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model('User',userSchema)
