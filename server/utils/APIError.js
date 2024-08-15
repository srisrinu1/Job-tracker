class APIError extends Error{
    constructor(statusCode,message,stackTrace,stack=''){
        super(message);
        this.statusCode=statusCode;
        this.stackTrace=stackTrace;
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }

}

module.exports=APIError;