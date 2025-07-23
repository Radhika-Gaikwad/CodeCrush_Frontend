const express =  require('express');
const port = 3000
const app = express();


// app.get("/getUserData",  (req, res)=>{
//   throw new Error("abcdefg");
//   res.send("User Data sent")
// });

app.get("/getUserData",  (req, res)=>{
try{
  throw new Error("abcdefg");
//   res.send("User Data sent")
}catch(err)
{
 res.status(500).send("Some error is occured contact support team")
}
});

app.use("/", (err, req, res, next)=>{
  if(err)
  {
    res.status(500).send("something went wrong")
  }
})



app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});