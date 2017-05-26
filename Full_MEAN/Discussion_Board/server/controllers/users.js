var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Category = mongoose.model("Category");
var Comments = mongoose.model("Comment");
var Topic = mongoose.model("Topic");
module.exports = {
    index: function(req, res){
        User.find({}, (function(err, users){
            if(err){return res.status(400).json(err);}
            Message.find({})
            .populate("comments")
            .populate("_user")
            .exec(function(err, messages){
                if(err){return res.status(400).json(err);}
                res.json({users:users, messages:messages})
            })
        }))
    },
    show: function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){return res.status(400).json(err);}
            res.json(user);
        })
    },
    create: function(req, res){
        User.findOne({user_name: req.body.user_name}, function(err, user){
            if(err){return res.status(400).json(err);}
            if(!user){
                User.create(req.body, function(err, user){
                    if(err){return res.status(400).json(err);}
                    res.json(user);
                })
            }
            else{
                res.json(user);
            }
        })
    },
}
