var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var OrderSchema = new mongoose.Schema({
    quantity: {type: Number, required: "You must define a quantity!"},
    _customer: {type: Schema.Types.ObjectId, ref: "Customer"},
    _product: {type: Schema.Types.ObjectId, ref: "Product"},
}, {timestamps: true})

mongoose.model('Order', OrderSchema); // We are setting this Schema in our Models as 'Friend'
