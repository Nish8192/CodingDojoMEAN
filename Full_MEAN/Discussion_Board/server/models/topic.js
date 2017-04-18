var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var TopicSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    description: {type: String, required: "You have a topic name something!"},
    topic: {type: String, required: "You have a topic name something!"},
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}]
}, {timestamps: true})

mongoose.model('Topic', TopicSchema); // We are setting this Schema in our Models as 'Friend'
