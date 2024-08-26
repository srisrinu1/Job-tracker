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
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
}

module.exports=passwordValidator;