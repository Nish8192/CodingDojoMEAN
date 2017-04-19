var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");

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
}
