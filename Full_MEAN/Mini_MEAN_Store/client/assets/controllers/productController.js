app.controller('productController', ["$scope", "storeFactory", "$location", "$cookies", function($scope, storeFactory, $location, $cookies){

    var index = function(){
        storeFactory.getOrders(function(data){
            $scope.products = data.products;
        })
    }
    index();

    $scope.product = {};
    $scope.addProduct = function(){
        storeFactory.addProduct($scope.product, function(data){
            if(data.errors){console.log(data.errors);}
            $scope.product = {};
            index();
        })
    }

}])
