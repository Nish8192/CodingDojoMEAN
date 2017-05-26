console.log("Routes");

var users = require("./../controllers/users.js");
var messages = require("./../controllers/messages.js");
var topics = require("./../controllers/topics.js");
var comments = require("./../controllers/comments.js");

module.exports = function(app){
app.get('/topics', function(req, res) {
  topics.index(req, res);
});
app.post("/topics", function(req, res){
    topics.create(req, res);
})
app.get("/messages/:id/show", function(req, res){
    messages.index(req, res);
})
app.post('/user/create', function(req, res) {
  users.create(req, res);
});
app.get("/user/:id/show", function(req, res){
    users.show(req, res);
})
app.post('/messages/:id/create', function(req, res) {
  messages.create(req, res);
});
app.post('/messages/:id/like', function(req, res) {
  messages.like(req, res);
});
app.post('/messages/:id/dislike', function(req, res) {
  messages.dislike(req, res);
});
app.post('/:id/messages/:message_id/create', function(req, res) {
  comments.create(req, res);
});
}
