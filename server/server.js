const express=require('express');
// const app=express();
const app=require('./app')
const http=require('http');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
const ConnectToDb=require('./config/db-connection');
const register=require('./api/routes/auth');
const errorHandler = require('./api/middlewares/errorHandler');

//setting .env file variables
dotenv.config({path:'./.env'})
const PORT=process.env.PORT || 5001;
// ConnectToDb();




// app.get("/",(req,res)=>{
//   res.status(200).json({message:'Test!'})
// });

// app.post("/",(req,res)=>{
//   res.status(201).json(req.body)
// })

// app.use('/api/user',register);
// app.use(errorHandler);

// console.log(register)
ConnectToDb().then(()=>{
    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    })
})
const server=http.createServer(app);
//Server Time out
// server.setTimeout(5000);


// app.listen(PORT,()=>{
//     console.log(`Listening on port ${PORT}`);
// })


// server.listen(PORT,()=>{
//     console.log(`Listening on port ${PORT}`);
// })