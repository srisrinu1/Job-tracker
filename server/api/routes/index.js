const express=require('express');
const app=express();

app.use('/api/users',require('./auth'));
app.use('/api/jobs',require('./jobs'));

module.exports=app;