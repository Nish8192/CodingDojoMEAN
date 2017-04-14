app.factory('storeFactory', ['$http', function($http){
    var factory = {};
    // var friends = [];
    factory.getAll = function(callback) {
        $http.get('/dashboard')
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
