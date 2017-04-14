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
    factory.getOrders = function(callback){
        $http.get('/orders')
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.addOrder = function(order, callback){
        $http.post('/orders', order)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.addCustomer = function(customer, callback){
        $http.post("/customers", customer)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.removeCustomer = function(id, callback){
        $http.delete("/customers/" + id + "/destroy")
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.getProducts = function(callback){
        $http.get("/products")
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.addProduct = function(product, callback){
        $http.post("/products", product)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
    return factory;
}])
