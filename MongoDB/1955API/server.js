// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();

//set body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// root route to render the index.ejs view
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

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
