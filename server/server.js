const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();


const PORT=process.env.PORT || 5001;


app.use(express.json())

app.get("/",(req,res)=>{
  res.status(200).json({message:'Test!'})
});

app.post("/",(req,res)=>{
  res.status(201).json(req.body)
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})