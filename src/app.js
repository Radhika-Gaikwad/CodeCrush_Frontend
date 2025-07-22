const express =  require('express');
const port = 3000
const app = express();

// this will only handle get cal to /user

// order matters
app.use("/user", (req, res)=>{
  res.send("HAAAAAAAAAAAAAA")
})
app.get("/user", (req, res)=>{
  res.send({name:"Radha", age:23})
})

app.post("/user", (req, res)=>{
  // saving data to the DB
  res.send("Data is saved")
})

app.delete("/user", (req, res)=>{
  res.send("deleted!")
})

// this will match all http method API call to /test
app.use("/test", (req, res)=>{
  res.send("Hello from the test!")
});



app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});