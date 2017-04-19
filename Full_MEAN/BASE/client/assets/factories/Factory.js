app.factory('Factory', ['$http', function($http){
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

    return factory;
}])
