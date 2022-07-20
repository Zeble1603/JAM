const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const hostSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type:{type:String,enum:['host',['musician']]}
});

module.exports = model("Host", hostSchema);
