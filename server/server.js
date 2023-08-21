const express=require('express');
const app=express();
require('dotenv').config();


const PORT=process.env.PORT || 5001;

app.get("/",(req,res)=>{
  res.status(200).json({message:'Test!'})
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})