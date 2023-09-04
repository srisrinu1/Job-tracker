const asyncHandler=require('express-async-handler');

const getJob=asyncHandler(async(req,res,next)=>{
    res.json({jobId:req.params.id})
});

module.exports={getJob}