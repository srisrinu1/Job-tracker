const express=require('express');
const app=express();
const cors=require('cors');
const indexRouter=require('./api/routes/index');
const dnsServer=require('./utils/dns-server');
const dns = require('dns');
const errorHandler = require('./api/middlewares/errorHandler');

app.use(express.json());
app.use(cors())


app.use('/',indexRouter);
app.use(errorHandler)

module.exports=app;