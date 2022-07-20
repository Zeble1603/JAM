const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema({
  name:{type:String,required:true},
  coordinates:{type:Object},
  address:{type:String,required:true},
  photos:{type:Array},
  user:{type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model("Place", placeSchema);
