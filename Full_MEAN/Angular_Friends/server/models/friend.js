var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var FriendSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    favorite_language: {type: String, required: true, minlength: 1},
}, {timestamps: true})

mongoose.model('Friend', FriendSchema); // We are setting this Schema in our Models as 'Friend'
