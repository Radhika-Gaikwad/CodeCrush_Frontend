const validator = require("validator")
const validateSignUpData = (req)=>{

  const {firstName, lastName, emailId, password} = req.body;

  if(!firstName)
  {
    throw new Error("Name is not valid!")
  }else if(!validator.isEmail(emailId))
  {
    throw new Error("email is not valid")
  }else if(!validator.isStrongPassword(password))
  {
    throw new Error("Passoword is not strong")
  }
}


module.exports = {
  validateSignUpData
}