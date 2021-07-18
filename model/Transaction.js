const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nic:String,
  type: String,
  category:String,
  value:Number,
  date:String,
  total:Number
  
  });
  
  module.exports = mongoose.model("transactions", schema);