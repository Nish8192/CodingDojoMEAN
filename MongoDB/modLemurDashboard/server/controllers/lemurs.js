var mongoose = require('mongoose');
var Lemur = mongoose.model("Lemur");
module.exports = {
    show: function(req, res) {
        Lemur.find({}, function(err, lemurs){
            if(err){
                console.log(err);
                res.redirect('/');
            }
            else{
                res.render("index", {lemurs});
            }
        })
    },
    create: function(req, res){
        lemur = new Lemur({name:req.body.name, age:req.body.age, weight:req.body.weight, height:req.body.height})
        lemur.save(function(err){
            if(err){
                console.log(err);
                res.redirect("/");
            }
            else{
                res.redirect("/");
            }
        })
    },
    edit: function(req, res){
        Lemur.find({_id: req.params.id}, function(err, lemurs){
            if(err){
                res.redirect("/");
            }
            else{
                res.render("edit", {lemurs});
            }
        })
    },
    new: function(req, res){
        res.render("new");
    },
    update: function(req, res){
        Lemur.findOne({_id: req.params.id}, function(err, lemur){
            if(err){
                console.log(err);
            }
            lemur.name = req.body.name;
            lemur.age = req.body.age;
            lemur.weight = req.body.weight;
            lemur.height = req.body.height;
            lemur.save(function(err){
                if(err){
                    console.log(err);
                    res.redirect("/");
                }
                else{
                    res.redirect("/");
                }
            })
        })
    },
    destroy: function(req, res){
        Lemur.remove({_id:req.params.id}, function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/")
        })
    }
}
