const express=require('express');
const app=express();
const indexRouter=require('./api/routes/index');
const errorHandler = require('./api/middlewares/errorHandler');

app.use(express.json())


app.use('/',indexRouter);
app.use(errorHandler)

module.exports=app;