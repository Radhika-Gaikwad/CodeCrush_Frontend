const mongoose = require('mongoose');
const validator = require("validator")
const userSchema = new mongoose.Schema({
  firstName :{
    type: String,
    required: true,
    minLength:4,
    maxLength:80
  },
    lastName :{
    type: String,
  },
    emailId :{
    type: String,
    lowercase:true,
    required: true,
    unique:true,
    trim:true,
    validate(value)
    {
      if(!validator.isEmail(value))
      {
        throw new Error("Invalid email Address"+value)
      }
    }
    },
    password :{
    type: String,
    required: true,
    validate(value)
    {
      if(!validator.isStrongPassword(value))
      {
        throw new Error("Your Passowrd is not strong enter strong passowrd"+ value)
      }
    }
  },
  age:{
    type: Number,
    min:18
  },
  gender:{
    type:String,
    validate(value)
    {
      if(!["male", "female", "others"].includes(value))
      {
        throw new Error("Gender data is not valid")
      }
    }
    
  },
  photoUrl:{
    type: String,
    default:"https://www.pngitem.com/pimgs/m/272-2720656_user-profile-dummy-hd-png-download.png",
    validate(value)
    {
      if(!validator.isURL(value))
      {
        throw new Error("Invali photot url:"+ value)
      }
    }
  },
  about:{
    type:String,
    default:"This is a default about of the user"
  },
  skills:{
    type:[String]
  }
  
  
}, {
  timestamps:true
});
const User =  mongoose.model("User", userSchema)

module.exports = User;

// module.exports = mongoose.model("User", userSchema)