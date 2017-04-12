var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var User = mongoose.model("User");
module.exports = {
    index: function(req, res){
        User.find({})
        .populate("messages")
        .populate("comments")
        .exec(function(err, users){
            if(err){res.json(err);}
            res.json({users});
        })
    },
    create: function(req, res){
        User.create(req.body, function(err, user){
            if(err){res.json(err);}
            res.json(user);
        })
    }
}
