const express =  require('express');
const port = 3000
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")

app.use(express.json())
app.post("/signup", async(req, res, next)=>{
 console.log(req.body)

 const user = new User(req.body);

 try{

  await user.save();
  res.send("User Addes Sucessfully")

 }catch(err)
 {
 res.status(400).send("Error is occuring"+ err.message) }

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



