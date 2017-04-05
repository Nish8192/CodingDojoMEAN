// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();

//require mongoose
var mongoose = require('mongoose');
//connect to mongoose server
mongoose.connect('mongodb://localhost/lemurs');
mongoose.Promise = global.Promise;
//basic user schema (use as blueprint)
var LemurSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    age: {type: Number, min: 1, max: 150},
    weight: {type: Number, min: 10},
    height: {type: Number, min: 2}
}, {timestamps: true})
mongoose.model('Lemur', LemurSchema); // We are setting this Schema in our Models as 'Lemur'
var Lemur = mongoose.model('Lemur')

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    Lemur.find({}, function(err, lemurs){
        if(err){
            console.log(err);
            res.redirect('/');
        }
        else{
            res.render("index", {lemurs});
        }
    })
})
app.get("/lemurs/new", function(req, res){
    res.render("new");
})
app.get("/lemurs/edit/:id", function(req, res){
    Lemur.find({_id: req.params.id}, function(err, lemurs){
        if(err){
            res.redirect("/");
        }
        else{
            res.render("edit", {lemurs});
        }
    })
})
app.post("/lemurs/:id", function(req, res){
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
})
app.post("/lemurs/destroy/:id", function(req, res){
    Lemur.remove({_id:req.params.id}, function(err){
        if(err){
            console.log(err);
        }
        res.redirect("/")
    })
})
app.post("/lemurs", function(req, res){
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
})
app.post("/lemurs", function(req, res){
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
})
// tell the express app to listen on port 8192
var server = app.listen(8192, function() {
    console.log("Listening on port 8192");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on("button_clicked", function(data){

    });
});
