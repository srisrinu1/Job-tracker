const express=require('express');
// const app=express();
const app=require('./app')
const http=require('http');
const bodyParser=require('body-parser');
require('dotenv').config();
const ConnectToDb=require('./config/db-connection');
const register=require('./api/routes/auth');
const errorHandler = require('./api/middlewares/errorHandler');


const PORT=process.env.PORT || 5001;
ConnectToDb();


// app.use(express.json())

// app.get("/",(req,res)=>{
//   res.status(200).json({message:'Test!'})
// });

// app.post("/",(req,res)=>{
//   res.status(201).json(req.body)
// })

// app.use('/api/user',register);
// app.use(errorHandler);

// console.log(register)

const server=http.createServer(app);


// app.listen(PORT,()=>{
//     console.log(`Listening on port ${PORT}`);
// })
server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})