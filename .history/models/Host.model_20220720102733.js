const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const hostSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type:{type:String,enum:['host','musician'],default:'host'},
  eventsCreated:[{type:Schema.Types.ObjectId, ref:'Events'}],
  eventsDone:[{type:Schema.Types.ObjectId, ref:'Events'}],
  rating:[{type:Schema.Types.ObjectId, ref:'Events'}],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  places: [{ type: Schema.Types.ObjectId, ref: 'Places' }],
});

module.exports = model("Host", hostSchema);
