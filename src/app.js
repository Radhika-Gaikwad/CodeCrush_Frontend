const express =  require('express');
const port = 3000
const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth")
// Get /users => middlerware chain => request handler 

app.use("/admin", adminAuth);

// app.use("/user", userAuth);

app.post("/login", (req, res)=>{
  res.send("login sucessfully")
})
app.get("/user", userAuth, (req, res)=>{
  res.send("user data")
});


app.get("/admin/getAllData", (req, res,  next)=>{
  res.send("all data is send")
});

app.delete("/admin/deleteUser", (req, res, next)=>{
  res.send("user is getting deleted")
});

app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});