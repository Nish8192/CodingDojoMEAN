app.controller('orderController', ["$scope", "storeFactory", "$location", "$cookies", function($scope, storeFactory, $location, $cookies){

    var index = function(){
        storeFactory.getOrders(function(data){
            console.log(data);
            $scope.customers = data.customers;
            $scope.products = data.products;
            $scope.orders = data.orders;
        })
    }
    index();

    $scope.order = {};
    $scope.addOrder = function(){
        storeFactory.addOrder($scope.order, function(data){
            if(data.errors){console.log(data.errors);}
            index();
            $scope.order = {};
        })
    }
}])
