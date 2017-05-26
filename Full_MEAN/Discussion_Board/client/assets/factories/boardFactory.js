app.factory('boardFactory', ['$http', function($http){
    var factory = {};
    // var friends = [];
    factory.getTopics = function(callback) {
        $http.get('/topics')
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createTopic = function(topic, callback) {
        $http.post('/topics', topic)
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.enter = function(user, callback) {
        $http.post('/user/create', user)
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.showUser = function(id, callback) {
        $http.get('/user/'+id+'/show')
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.getMessages = function(id, callback){
        $http.get("/messages/"+id+"/show")
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
    }
    factory.createMessage = function(message, user_id, callback) {
        $http.post('/messages/'+user_id+'/create', message)
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.likeMessage = function(id, callback) {
        $http.get('/messages/'+id+'/like')
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.dislikeMessage = function(id, callback) {
        $http.get('/messages/'+id+'/dislike')
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createComment = function(comment, user_id, message_id, callback) {
        $http.get('/'+user_id+'/messages/'+message_id+'/create')
        .then(function(returned_data){
            // console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }


    return factory;
}])
