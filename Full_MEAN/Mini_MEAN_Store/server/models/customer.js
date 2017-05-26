var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var CustomerSchema = new mongoose.Schema({
    name: {type: String, required: "Must have a name attached!"},
    orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
}, {timestamps: true})

mongoose.model('Customer', CustomerSchema); // We are setting this Schema in our Models as 'Friend'
