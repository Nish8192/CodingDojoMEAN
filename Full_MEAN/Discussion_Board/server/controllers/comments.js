var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Comments = mongoose.model("Comment");
module.exports = {
    create: function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){res.status(400).json(err);}
            Message.findOne({_id: req.params.message_id}, function(err, message){
                if(err){res.status(400).json(err);}
                Comments.create({_user: user._id, _message: message._id, content: req.body.content, name: user.user_name}, function(err, comment){
                    if(err){res.status(400).json(err);}
                    user.comments.push(comment);
                    message.comments.push(comment);
                    user.save();
                    message.save();
                    res.json({success: "Comment added!"})
                })
            })
        })
    }
}
