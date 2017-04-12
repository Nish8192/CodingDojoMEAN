var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var MessageSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String, required: "You must post something!"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true})

mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Friend'
