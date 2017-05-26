var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//CREATE MODEL SCHEMA
var UserSchema = new mongoose.Schema({
    user_name: {type: String, required: "You must provide a user name!", maxlength: 20},
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Friend'
