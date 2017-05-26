var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
var Message = mongoose.model("Message");
module.exports = {
    create: function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){res.json(err);}
            Message.create({_user: user.id, content: req.body.content}, function(err, message){
                if(err){res.json(err);}
                user.messages.push(message._id);
                user.save();
                return res.json(message);
            })
        })
    }
}
