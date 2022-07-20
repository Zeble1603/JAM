const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema({
  name:{type:String,required:true},
  coordinates:{type:Object,required:true}
});

module.exports = model("Place", placeSchema);
