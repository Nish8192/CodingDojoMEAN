app.controller('customerController', ["$scope", "storeFactory", "$location", "$cookies", function($scope, storeFactory, $location, $cookies){

    $scope.customers = {};
    var index = function(){
        storeFactory.getAll(function(data){
            if(data.errors){console.log(data.errors);}
            $scope.customers = data.customers;
        })
    }
    index();

    $scope.newCustomer = {};
    $scope.addCustomer = function(){
        storeFactory.addCustomer($scope.newCustomer, function(data){
            if(data.errors){console.log(data.errors);}
            index();
            $scope.newCustomer = {};
        })
    }

    $scope.removeCustomer = function(id){
        storeFactory.removeCustomer(id, function(data){
            if(data.errors){console.log(data.errors);}
            index();
        })
    }
}])
