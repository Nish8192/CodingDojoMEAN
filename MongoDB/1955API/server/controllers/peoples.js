var mongoose = require('mongoose');

//SET VARIABLE TO MODEL W/ MONGOOSE.MODEL
var Person = mongoose.model("People");
module.exports = {
    show: function(req, res) {
        Person.find({}, function(err, people){
            if(err){
                console.log(err);
                res.redirect('/');
            }
            else{
                res.json({people});
            }
        })
    },
    new: function(req, res){
        var pers = new Person({name: req.params.name});
        pers.save(function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/");
        })
    },
    destroy: function(req, res){
        Person.remove({name: req.params.name}, function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/");
        })
    },
    view: function(req, res){
        Person.findOne({name: req.params.name}, function(err, person){
            if(err){
                console.log(err);
            }
            res.json({person});
        })
    }
}
