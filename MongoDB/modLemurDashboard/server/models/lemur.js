var mongoose = require('mongoose');

var LemurSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    age: {type: Number, min: 1, max: 150},
    weight: {type: Number, min: 10},
    height: {type: Number, min: 2}
}, {timestamps: true})

mongoose.model('Lemur', LemurSchema); // We are setting this Schema in our Models as 'Lemur'
