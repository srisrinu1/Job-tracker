const mongoose=require('mongoose');

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

module.exports=mongoose.model('User',userSchema)
