const passwordValidator=(value,helpers)=>{
    if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[a-z]/.test(value) ||
        !/\d/.test(value) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(value)
      ) {
        return helpers.message(
          'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
        );
      }
      return value;

}

//Validate the userId mongo 
const ObjectId=(value,helpers)=>{
  const objectIdPattern = /^[a-fA-F0-9]{24}$/;
  if (objectIdPattern.test(value)) {
    return helpers.message('"{{#label}}" must be a valid MongoDB ObjectId');
  }
  return value;
}

module.exports=passwordValidator;