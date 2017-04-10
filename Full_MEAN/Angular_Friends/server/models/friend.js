var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var FriendSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    age: {type: Number, min: 1, max: 150},
    weight: {type: Number, min: 10},
    height: {type: Number, min: 2}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema); // We are setting this Schema in our Models as 'Friend'
