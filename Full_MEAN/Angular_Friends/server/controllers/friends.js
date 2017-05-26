var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var Friend = mongoose.model("Friend");
module.exports = {
    index: function(req, res){
        console.log("index route");
        Friend.find({}, function(err, friends){
            console.log(friends);
            if(err){console.log(err);}
            res.json({friends});
        })
    },
    show: function(req, res){
        Friend.findOne({_id: req.params.id}, function(err, friend){
            if(err){console.log(err);}
            res.json(friend);
        })
    },
    create: function(req, res){
        console.log(req.body);
        Friend.create(req.body, function(err, friend){
            if(err){console.log(err);}
            res.json(friend);
        })
    },
    update: function(req, res){
        Friend.findOne({_id: req.params.id}, function(err, friend){
            console.log(friend);
            console.log(req.body);
            friend.first_name = req.body.first_name;
            friend.last_name = req.body.last_name;
            friend.birthday = req.body.birthday;
            friend.save(function(err){
                if(err){console.log(err);}
            });
        })
    },
    delete: function(req, res){
        Friend.remove({_id: req.params.id}, function(err){
            if(err){console.log(err);}
        })
    }
}
