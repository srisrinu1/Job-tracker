const express=require('express');
const app=express();
const cors=require('cors');
const indexRouter=require('./api/routes/index');
const dnsServer=require('./utils/dns-server');
const cookieParser=require('cookie-parser');
const dns = require('dns');
const errorHandler = require('./api/middlewares/errorHandler');

app.use(express.json());
app.use(cookieParser())
app.use(cors());

//Testing



app.use('/',indexRouter);
app.use(errorHandler)

module.exports=app;