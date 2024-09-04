const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const routes = require('./api/routes');
const { jwtStrategy } = require('./config/passport');
const APIError = require('./utils/APIError');
const cookieParser = require('cookie-parser');
const errorHandler = require('./api/middlewares/error');
const timeout = require('connect-timeout');
const {authProxy, proxyMiddleware}=require('./api/middlewares/authProxy')

// Apply the timeout middleware early


// Handle CORS and ensure credentials (cookies) can be sent/received
app.use(cors({
  origin: 'http://localhost:5000',  // Replace with your frontend URL
  credentials: true
}));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies before any route handlers that use req.cookies
app.use(cookieParser());

// Parse JSON and URL-encoded data

// Initialize passport and apply the JWT strategy
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/api', authProxy);

// Apply the proxy middleware to forward requests to the backend API
app.use('/api', proxyMiddleware);

// Test route to check cookies
app.use((req, res, next) => {
  console.log('From app js Cookies:', req.cookies);
  next();
})

// Set up routes
app.use('/v1', routes);


// Global error handler
app.use(errorHandler);

module.exports = app;
