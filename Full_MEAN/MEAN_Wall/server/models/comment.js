var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var CommentSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, required: "You must comment something!"},
    name: {type: String, required: "Must have a user attached!"},
    _message: {type: Schema.Types.ObjectId, ref: "Message"}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Friend'
