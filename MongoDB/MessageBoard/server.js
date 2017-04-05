// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();

//require mongoose
var mongoose = require('mongoose');
//connect to mongoose server
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
//basic user schema (use as blueprint)
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    poster: {type: String, required: true, minlength: 2},
    message: {type: String, required: true, minlength: 10},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true})
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
var Message = mongoose.model('Message')

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: "Message"},
    commenter: {type: String, required: true, minlength: 4},
    comment: {type: String, required: true, minlength: 10}
}, {timestamps: true})
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Comment'
var Comments = mongoose.model('Comment')

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
    Message.find({})
    .populate("comments")
    .exec( function(err, messages){
        if(err){
            console.log(err);
        }
        res.render("index", {messages});
    })
})
// post route for adding a user
app.post('/message', function(req, res) {
    message = new Message({poster: req.body.name, message: req.body.message});
    message.save(function(err){
        if(err){
            console.log(err);
        }
         res.redirect('/');
    })
})
app.post("/message/:id/comment", function(req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        if(err){
            console.log(err);
        }
        comment = new Comments({commenter: req.body.commenter, comment: req.body.comment, _message: message._id})
        comment.save(function(err){
            if(err){
                console.log(err);
            }
            message.comments.push(comment._id)
            message.save(function(err){
                if(err){
                    console.log(err);
                }
                console.log(comment);
                res.redirect("/")
            })
        })
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
