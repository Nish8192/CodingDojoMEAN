// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();

//require mongoose
var mongoose = require('mongoose');
//connect to mongoose server
mongoose.connect('mongodb://localhost/Dojo_Redux');
mongoose.Promise = global.Promise;
//basic user schema (use as blueprint)
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 6},
    quote: {type: String, required: true, minlength: 10}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote')

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
    res.render("index", {err: null});
})
// post route for adding a user
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log(err);
            res.render("index", {err})
        }
        else{
            res.redirect("/quotes")
        }
    })
})
app.get("/quotes", function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            res.render("index", {err});
        }
        else {
            res.render("quotes", {quotes});
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
