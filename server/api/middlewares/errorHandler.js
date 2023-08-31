const {constants}=require('../../utils/constants');
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    console.log(statusCode);
    console.log("Line 5:",constants)
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
              title:"Validation Failed",
              message:err.message,
              stackTrace:err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        case constants.DUPLICATE_RECORD:
            res.json({
                title:"Duplicate record",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        default:
            console.log('No Error,All good!');
            break;
    }


}

module.exports=errorHandler;