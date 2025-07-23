const express =  require('express');
const port = 3000
const {connectDB} = require("./config/database")
const app = express();


connectDB()
.then(()=>{
  console.log("Database connction is established")
  app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`)
});
}).catch((err)=>{
  console.log("err is occured to establish database connection")
});



