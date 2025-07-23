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

});

// Feed APi get all the users api from the const first = useRef(second)

app.get("/user",async (req, res)=>{
  const userEmail = req.body.emailId;
  try{
    const user = await  User.find({emailId : userEmail});
    if(user.length===0)
    {
      res.status(404).send("User not found")
      }
      else{
      res.send(user)
      }
    

  }catch(err)
  {
    res.status(400).send("something went wrong")
  }
 
})

app.get("/feed", async(req, res)=>{

  try{
    const user = await User.find({});
    if(user.length===0)
    {
      res.status(400).send("No users found")
   
    }else{
         res.send(user)
    }

  }catch(err)
  {
    res.status(400).send("Something went wrong")
  }
})

// findOne  
app.get("/findOne", async(req, res, next)=>{
const userEmail = req.body.emailId
  try{
    const user = await User.findOne({emailId: userEmail});
console.log(user)
    if(!user)
    {
      res.status(404).send("User is not found")
    }
    else{
      res.send(user)
    }
  }catch(err)
  {
    res.status(400).end("Something went wrong")
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



