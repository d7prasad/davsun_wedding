const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReceptionSchema = new Schema({
  email:{
    type:String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: true
  }
});

mongoose.model('reception', ReceptionSchema);