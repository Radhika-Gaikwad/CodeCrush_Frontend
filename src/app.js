const express =  require('express');
const port = 3000
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup", async(req, res, next)=>{
  const userObj = {
    firstName:"Meena",
    lastName:"Mane",
    emailId: "meena@gmail.com",
    password:"meena@123",
   
  }
// Creating a new instance of the user model
  const user = new User(userObj)

  try{
 await user.save();
 res.send("User Added Sucessfully!")
  }catch(err)
  {
    res.status(400).send("Error saving the user:" + err.message)
  }

})

connectDB()
.then(()=>{
  console.log("Database connction is established")
  app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});
}).catch((err)=>{
  console.log("err is occured to establish database connection")
});



