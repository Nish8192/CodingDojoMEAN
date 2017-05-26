var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var MessageSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"}
    message: {type: String, required: "You must enter a message!"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    likes: {type: Number},
    dislikes: {type: Number},
    _topic: {type: Schema.Types.ObjectId, ref: "Topic"}
}, {timestamps: true})

mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Friend'
