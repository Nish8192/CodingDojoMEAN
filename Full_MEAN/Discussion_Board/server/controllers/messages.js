var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Category = mongoose.model("Category");
var Comments = mongoose.model("Comment");
var Topic = mongoose.model("Topic");
module.exports = {
    index: function(req, res){
        Message.find({_topic: req.params.id})
        .populate("_user")
        .populate("comments")
        .populate("topic")
        .exec(function(err, messages){
            if(err){res.status(400).json(err);}
            Topic.findOne({_id: req.params.id})
            .populate("_user")
            .exec(function(err, topic){
                if(err){res.status(400).json(err);}
                res.json({messages: messages, topic: topic})
            })
        })
    },
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
    },
    like: function(req, res){
        Message.findOne({_id: req.params.id}, function(err, message){
            if(err){return res.status(400).json(err);}
            message.likes += 1;
            message.save(function(err){
                if(err){return res.status(400).json(err);}
                res.json(message);
            })
        })
    },
    dislike: function(req, res){
        Message.findOne({_id: req.params.id}, function(err, message){
            if(err){return res.status(400).json(err);}
            message.dislikes += 1;
            message.save(function(err){
                if(err){return res.status(400).json(err);}
                res.json(message);
            })
        })
    }
}
