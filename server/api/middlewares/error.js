const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    const response = {
      code: statusCode,
      message,
      stack: err.stack,
    };
  
    res.status(statusCode).json(response);
  };


  module.exports = errorHandler;
  