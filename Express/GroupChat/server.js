// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
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
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// tell the express app to listen on port 8192
var server = app.listen(8000, function() {
 console.log("Listening on port 8192");
});
var messages = [];
var i = 0;
var users = {};
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    var current_id = i;
    i++;
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on("new_user", function(data){
        users[current_id] = data.user_name;
        console.log(data.user_name);
        messages.push(data.user_name + " has logged in!!")
        io.emit("new_message", {messages: messages, users: users, id:current_id})
    });
    socket.on("message_sent", function(data){
        messages.push(users[current_id] + ": " + data.message);
        io.emit("new_message", {messages: messages, users: users, id:current_id})
    })
});
