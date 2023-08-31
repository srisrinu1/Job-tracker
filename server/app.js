const express=require('express');
const app=express();
const indexRouter=require('./api/routes/index');

app.use('/',indexRouter);

module.exports=app;