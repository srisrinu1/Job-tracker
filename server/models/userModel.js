const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the username"],

    },
    email:{
        type:String,
        required:[true,"Please enter the email"]
    },
    password:{
        type:String,
        required:[true,"Please enter the password"],
        minlength:[8,'Your password must have atleast 8 characters'],
        select:false
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
    createdAt:{
        type:Date,
        immutable:true,
        default:Date.now
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpire:{
        type:Date
    }

});

//Encrypt Password before saving
userSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,10)
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
