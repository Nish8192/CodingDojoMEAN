var express = require("express");

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response){
    response.send("<h1>Hello Express!!</h1>");
})

app.get("/users", function(request, response){
    var users_array = [
        {name: "Nishant", email: "nish@email.com"},
        {name: "Jason", email: "jason@email.com"},
        {name: "Marco", email: "marco@email.com"},
        {name: "Jake", email: "jake@email.com"},
    ];
    response.render('users', {users: users_array});
})

app.listen(6789, function(){
    console.log("Listening on port 6789");
})
