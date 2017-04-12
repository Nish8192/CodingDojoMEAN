var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var CommentSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, required: "You must post something!"},
    _message: {type: Schema.Types.ObjectId, ref: "Message"}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Friend'
