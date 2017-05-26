var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var CategorySchema = new mongoose.Schema({
    category: {type: String, required: "Must have a name!"}
    Topics: [{type: Schema.Types.ObjectId, ref: "Topic"}]
}, {timestamps: true})

mongoose.model('Category', CategorySchema); // We are setting this Schema in our Models as 'Friend'
