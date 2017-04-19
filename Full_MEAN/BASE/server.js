var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8192,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json())
require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);
var server = app.listen( port, function() {
    console.log( `server running on port ${ port }` );
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on("button_clicked", function(data){
    });
});
