var mongoose = require('mongoose');

//CREATE MODEL SCHEMA
var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1}
}, {timestamps: true})

mongoose.model('People', PeopleSchema); // We are setting this Schema in our Models as 'Lemur'
