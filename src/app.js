const express =  require('express');
const port = 3000
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")
const bcrypt = require("bcrypt")
app.use(express.json());
const {validateSignUpData, validateLoginData} = require("./utils/validation")


app.post("/signup", async(req, res, next)=>{
   try{
//  console.log(req.body)
// Validation of the data 
validateSignUpData(req)

const {firstName, lastName, password, emailId} = req.body
// Encrypt the passoword
const passwordHash = await bcrypt.hash(password, 10);
console.log(passwordHash)

// creating then new instance of the User
 const user = new User({
  firstName, lastName, password: passwordHash, emailId, 
 });



  await user.save();
  res.send("User Addes Sucessfully")

 }catch(err)
 {
 res.status(400).send("Error : "+ err.message) }

});


// login api 
app.post("/login", async(req, res, next)=>{
   try{

    const {emailId, password} = req.body;
validateLoginData(req);
const user = await User.findOne({emailId: emailId});
if(!user)
{
  throw new Error("Invalid Credentials")
}
const isValidPassword = await bcrypt.compare(password, user.password)

if(isValidPassword)
{
  res.send("Login Successfully!")
}else{
  throw new Error("Invalid Credentials")
}





   }catch(err)
   {
    res.status(400).send("Error: "+ err.message)
   }
})

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

// find user by id
app.get("/findUser/:id", async(req, res, next)=>{
  const userId = req.params.id


  try{
    const user = await User.findById(userId)
    if(!user)
    {
      res.status(404).send("Not Found")
    }else{
      res.send(user);
    }

  }catch(err)
  {
    res.status(400).send("Something went wrong")
  }
})

// Delete User

app.delete("/deleteUser", async(req, res, next)=>{
  const userId = req.body.userId

  try{
    const user = await User.findByIdAndDelete(userId);
    
    res.send("User Deleted Sucessfully!")
  }
  catch(err)
  {
    res.status(400).send("Something went wrong");
  }

})

// Update the user data

app.patch("/update/:userId", async(req, res, next)=>{
  const data = req.body
const userId = req.params?.userId


  try{

    const Allowed_update = [ 
  "photoUrl", "about", "gender", "age", "skills"
];

const isUpdateAllowed = Object.keys(data).every((k)=> Allowed_update.includes(k) );

if(!isUpdateAllowed)
{
  throw new Error("Update is not allowed");
}
if(data?.skills?.length>10)
{
  throw new Error("Skills should not be more than 10")
}
   const user = await User.findByIdAndUpdate(userId, data, {returnDocument:"before",
    runValidators: true
   });

   console.log(user)

   res.send("User updated sucessfully")
  }catch(err)
  {
    res.status(400).send("Something went wrong"+ err.message)
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



