var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var CommentSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"}
    comment: {type: String, required: "You must enter a comment!"},
    _message: {type: Schema.Types.ObjectId, ref: "Message"},
    name: {type: String},
}, {timestamps: true})

mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Friend'
