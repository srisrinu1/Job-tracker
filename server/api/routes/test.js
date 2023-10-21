const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    setTimeout(()=>{
        res.status(400).json({message:'Testing'})

    },20000)



})

module.exports=router;