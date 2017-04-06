var mongoose = require('mongoose');
var Lemur = mongoose.model("Lemur");
var lemurs = require("./../controllers/lemurs.js");
module.exports = function(app) {
    app.get('/', function(req, res){
        lemurs.show(req, res);
    })
    app.get("/lemurs/new", function(req, res){
        lemurs.new(req, res);
    })
    app.get("/lemurs/edit/:id", function(req, res){
        lemurs.edit(req, res);
    })
    app.post("/lemurs/:id", function(req, res){
        lemurs.update(req, res);
    })
    app.post("/lemurs/destroy/:id", function(req, res){
        lemurs.destroy(req, res);
    })
    app.post("/lemurs", function(req, res){
        lemurs.create(req, res);
    })
}
