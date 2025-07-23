// config/database.js
const mongoose = require('mongoose'); 

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://radhika111201:3aAEUzoGPWp1kPKc@namsatenode.23llrxe.mongodb.net/codeCrush?retryWrites=true&w=majority");
};

module.exports = {
  connectDB
}
