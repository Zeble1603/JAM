const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  autor:{type:String,required:true},
  title:{type:String,required:true},
  description:{type:String,required:true},
  rating:{type:number,required:true},
  photos:{type:string}
});

module.exports = model("Comment", commentSchema);
