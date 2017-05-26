app.factory('boardFactory', ['$http', function($http){
    var factory = {};
    // var friends = [];
    factory.getMessages = function(callback) {
        $http.get('/messages')
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
    factory.enter = function(user, callback){
        $http.post("/user/create", user)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createMessage = function(message, id, callback){
        $http.post("/messages/"+id+"/create", message)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createComment = function(comment, user_id, message_id, callback){
        $http.post('/'+user_id+'/messages/'+message_id+'/create', comment)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                // console.log("Hit callback");
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }


    return factory;
}])
