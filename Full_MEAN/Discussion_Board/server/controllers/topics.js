var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Category = mongoose.model("Category");
var Comments = mongoose.model("Comment");
var Topic = mongoose.model("Topic");
module.exports = {
    index: function(req, res){
        Topic.find({})
        .populate('_user')
        .populate('category')
        .populate("messages")
        .exec(function(err, topics){
        if(err){return res.status(400).json(err);}
            Category.find({}, function(err, categories){
                if(err){return res.status(400).json(err);}
                res.json({topics: topics, categories: categories});
            })
        })
    },
    addTopic: function(req, res){
        Topic.create(req.body, function(err, topic){
            if(err){return res.status(400).json(err);}
            res.json(topic);
        })
    }
}
