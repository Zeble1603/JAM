const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const musicianSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type:{type:String,enum:['host','musician'],default:'musician'},
  instrument:{type:String,enum:['guitar','drums','bass','piano','microphone','harmonica','triangle']},
  instrumentLevel:{type:String,enum:['beginner','intermediate','advanced','expert','I am the fucking Kurt Cobain']},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  eventsSubscribed:[{type:Schema.Types.ObjectId, ref:'Events'}],
  eventsParticipated:[{type:Schema.Types.ObjectId, ref:'Events'}], //dudas aqui
  eventsNotParticipated:[{type:Schema.Types.ObjectId, ref:'Events'}],
  rating:{type:Number},
  friends:[{ type: Schema.Types.ObjectId, ref: 'Users' }]

});

module.exports = model("Musician", musicianSchema);
