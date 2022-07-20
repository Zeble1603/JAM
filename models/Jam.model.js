const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jamSchema = new Schema({
    name:{type:String},
    place:{type: Schema.Types.ObjectId, ref: 'Place'},
    date:{type: Date},
    host:{type: Schema.Types.ObjectId, ref: 'User'},
    musicians: [{type: Schema.Types.ObjectId, ref: 'User'}],
    limit: {type:Boolean},
    capacity: {type:Number},
    rating: {type:Number},
    comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}],
    description:{type:String},
    categories:{type:Array},
});

module.exports = model("Jam", jamSchema);