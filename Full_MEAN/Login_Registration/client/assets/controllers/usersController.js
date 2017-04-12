app.controller('usersController', ["$scope", "usersFactory", "$location", function($scope, usersFactory, $location){
    $scope.message = "";
    $scope.flag = false;
    $scope.create = function(){
        usersFactory.create($scope.newUser, function(data){
            if(data.errors){
                console.log(data);
                $scope.message = data.errors;
                $scope.flag = true;
                $location.url("/");
            }
            else{
                flag = false;
                $location.url("/success");
            }
        })
    }
    $scope.login = function(){
        usersFactory.login($scope.user, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.message = data.errors;
                $scope.flag = true;
                $location.url("/login");
            }
            else {
                flag = false;
                $location.url("/success");
            }
        })
    }
}])
