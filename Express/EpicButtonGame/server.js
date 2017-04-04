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

// tell the express app to listen on port 8192
var server = app.listen(8192, function() {
 console.log("Listening on port 8192");
});

var io = require('socket.io').listen(server);
var count = 0;
io.sockets.on('connection', function (socket) {
  // var count=0;
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  io.emit("user_connected", {count: count});
  socket.on("epic_button_clicked", function(data){
      count++;
      io.emit("count_updated", {count: count});
  });
  socket.on("reset_button_clicked", function(data){
      count = 0;
      io.emit("count_updated", {count: 0})

  });
});
