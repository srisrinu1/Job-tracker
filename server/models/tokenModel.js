const mongoose = require('mongoose');
const {tokenTypes} = require('../config/token');

const tokenSchema=mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:[tokenTypes.ACCESS, tokenTypes.REFRESH,tokenTypes.VERIFY_EMAIL, tokenTypes.RESET_PASSWORD]
    },
    expires:{
        type:Date,
        required:true
    },
    blacklisted: {
        type: Boolean,
        default: false,
      },
    
},

{
    timestamps:true
}
);

const Token=mongoose.model('Token',tokenSchema);

module.exports=Token;
