console.log("Routes");

var users = require("./../controllers/users.js");
var messages = require("./../controllers/messages.js");
var comments = require("./../controllers/comments.js");

module.exports = function(app){
app.get('/messages', function(req, res) {
  users.index(req, res);
});
app.post('/user/create', function(req, res) {
  users.create(req, res);
});
app.post('/messages/:id/create', function(req, res) {
  messages.create(req, res);
});
app.post('/:id/messages/:message_id/create', function(req, res) {
  comments.create(req, res);
});
}
