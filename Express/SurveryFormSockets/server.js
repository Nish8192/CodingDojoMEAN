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

// tell the express app to listen on port 8000
var server = app.listen(8192, function() {
 console.log("Listening on port 8192");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  socket.on("survey_submitted", function(data){
      min = Math.ceil(1);
      max = Math.floor(1000);
      random_number = Math.floor(Math.random() * (max - min + 1)) + min;
      socket.emit("updated_message", {message: `Your form has been submitted ${data.name}! You are at ${data.location} and your favorite language is ${data.language}. You added ${data.comment}!`});
      socket.emit("random_number", {number: random_number});
  });
});
