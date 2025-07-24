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

const validateLoginData = (req)=>{
  const {emailId, password} = req.body;

  if(!emailId || !password)
{
  throw new Error("email & passwords are required")

    }
    else if(!validator.isEmail(emailId))
    {
      throw new Error("Please Enter valid email id")
    }
}
module.exports = {
  validateSignUpData, validateLoginData
}