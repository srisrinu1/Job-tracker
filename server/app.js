const express=require('express');
const app=express();
const cors=require('cors');
const passport=require('passport');
const httpStatus=require('http-status');
// const indexRouter=require('./api/routes/index');
// const dnsServer=require('./utils/dns-server');
const routes=require('./api/routes');
const {jwtStrategy}=require('./config/passport');
const APIError=require('./utils/APIError');
const cookieParser=require('cookie-parser');
const dns = require('dns');
// const errorHandler = require('./api/middlewares/errorHandler');
const errorHandler=require('./api/middlewares/error');
const timeout=require('connect-timeout');
app.use(timeout('5s'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/v1',routes);


app.use((req, res, next) => {
  next(new APIError(httpStatus.NOT_FOUND, 'Not found'));
});




app.use(errorHandler);




module.exports=app;


