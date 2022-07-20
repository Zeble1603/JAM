const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  autor:{type:String,required:true},
  title:{type:String,required:true}
});

module.exports = model("Comment", commentSchema);
