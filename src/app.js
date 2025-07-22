const express =  require('express');
const port = 3000
const app = express();

app.use("/hello", (req, res)=>{
  res.send("Hello from the hello!")
});

app.use("/", (req, res)=>{
  res.send("Hello from the server!")
});

app.use("/test", (req, res)=>{
  res.send("Hello from the test!")
});



app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});