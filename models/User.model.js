const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  type:{type:String,enum:['host','musician'],required: true},
  //Musicians
  instrument:{type:String,enum:['Guitar','Drums','Bass','Piano','Singer','Harmonica','Saxophone','Trumpet','Other']},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  eventsSubscribed:[{type:Schema.Types.ObjectId, ref:'Jam'}],
  eventsParticipated:[{type:Schema.Types.ObjectId, ref:'Jam'}], //dudas aqui
  eventsNotParticipated:[{type:Schema.Types.ObjectId, ref:'Jam'}],
  participationRating:{type:Number},
  friends:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  coordinates:{type:Object},
  //Hosts
  jamsCreated:[{type:Schema.Types.ObjectId, ref:'Jam'}],
  jamsPassed:[{type:Schema.Types.ObjectId, ref:'Jam'}],
  rating: {type:Number},
  places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
});

module.exports = model("User", userSchema);