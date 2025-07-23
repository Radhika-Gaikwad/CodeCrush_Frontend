const mongoose = require('mongoose');


const connectDB = async()=>{
  await mongoose.connect("mongodb+srv://radhika111201:3aAEUzoGPWp1kPKc@namsatenode.23llrxe.mongodb.net/test?retryWrites=true&w=majority/codeCrush");
};

module.exports = {
  connectDB
}