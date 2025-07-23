const express =  require('express');
const port = 3000
const app = express();

// Get /users => middlerware chain => request handler 

app.use("/", (req, res, next)=>{
  // res.send("handling / route")
  console.log(" hnading /user route & I m just middleware");
  next();
});

app.get("/user", (req, res, next)=>{
  console.log(" hnading /user route & I m just middleware");
  next();
},
(req, res, next)=>{
  console.log(" hnading /user route2");
  res.send("I am request(response) handler because I am sending response back to the client")
})



app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});