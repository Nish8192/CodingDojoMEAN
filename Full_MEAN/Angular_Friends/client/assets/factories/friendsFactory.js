app.factory('friendsFactory', ['$http', function($http){
    var factory = {};
    // var friends = [];
    factory.index = function(callback) {
        $http.get('/friends')
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.show = function(id, callback) {
        $http.get("/friends/" + id).then(function(returned_data){
            if(typeof(callback) == "function"){
                console.log(returned_data.data);
                callback(returned_data.data);
            }
        });
    }

    factory.create = function(newfriend, callback){
        $http.post("/friends", newfriend).then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        });
    }

    factory.update = function(id, newdata, callback){
        $http.put("/friends/"+id, newdata).then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        }).catch(function(err){
        console.log(err);
    });
    }

    factory.delete = function(id, callback){
        $http.delete("/friends/"+id+"/destroy").then(function(returned_data){
            console.log(returned_data.data);
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
