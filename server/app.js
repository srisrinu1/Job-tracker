const express=require('express');
const app=express();
const cors=require('cors');
const indexRouter=require('./api/routes/index');
const dnsServer=require('./utils/dns-server');
const errorHandler = require('./api/middlewares/errorHandler');

app.use(express.json());
app.use(cors())
// app.use(dnsServer.setDnsServer);
app.set('dns', ['1.1.1.1', '1.0.0.1']);

app.use('/',indexRouter);
app.use(errorHandler)

module.exports=app;