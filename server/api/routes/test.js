const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    req.setTimeout(10000);
    res.status(400).json({message:'Testing'})


})

module.exports=router;