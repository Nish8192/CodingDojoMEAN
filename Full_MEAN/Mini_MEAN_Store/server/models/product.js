var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var ProductSchema = new mongoose.Schema({
    name: {type: String, required: "You must provide a name!", maxlength: 20},
    image_url: {type: String},
    description: {type: String, required: "You must provide a description!"},
    quantity: {type: Number, required: "You must provide a quantity!"},
    orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
}, {timestamps: true})

mongoose.model('Product', ProductSchema); // We are setting this Schema in our Models as 'Friend'
