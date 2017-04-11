var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var FriendSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 1},
    last_name: {type: String, required: true, minlength: 1},
    birthday: {type: Date, required: true}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema); // We are setting this Schema in our Models as 'Friend'
