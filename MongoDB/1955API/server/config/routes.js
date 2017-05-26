var mongoose = require('mongoose');

//IMPORT MODEL NAMES FROM MONGOOSE.MODEL
var People = mongoose.model("People");

//REQUIRE CONTROLLERS FOR IMPORTED MODELS
var peoples = require("./../controllers/peoples.js");
module.exports = function(app) {
    app.get('/', function(req, res){
        peoples.show(req, res);
    })
    app.get("/new/:name", function(req, res){
        peoples.new(req, res);
    })
    app.get("/remove/:name/", function(req, res){
        peoples.destroy(req, res);
    })
    app.get("/:name", function(req, res){
        peoples.view(req, res);
    })
}
