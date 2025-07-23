const express =  require('express');
const port = 3000
const app = express();

// multiple route hanlders

app.use("/user", [(req, res, next)=>{
  // route handler
  console.log("handleing route of the handler function")
    next();
  // res.send("Router Handler 1")
  // by default it not going to the second router hanlder function we need next function


}, (req, res, next)=>{

  console.log("handling second route of the hanlder function");
next()
  // res.send("2nd router hanlder!")
},
 (req, res, next)=>{

  console.log("handling second route of the hanlder function");

  res.send("5nd router hanlder!")
}]);




app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});