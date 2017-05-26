app.controller('usersController', ["$scope", "usersFactory", "$location", "$cookies", function($scope, usersFactory, $location, $cookies){
    $scope.messages = [];
    $scope.flag = false;
    $scope.create = function(){
        usersFactory.create($scope.newUser, function(data){
            if(data.errors){
                console.log(data);
                console.log(typeof(data.errors));
                if(typeof(data.errors) == "object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    })
                }
                else{
                    $scope.messages.push(data.errors);
                }
                $scope.flag = true;
                $location.url("/");
            }
            else{
                $scope.flag = false;
                $cookies.put("user_id", data._id);
                console.log($cookies.get("user_id"));
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
                $scope.flag = false;
                $cookies.put("user_id", data._id);
                console.log($cookies.get("user_id"));
                $location.url("/success");
            }
        })
    }
    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        console.log($cookies.get("user_id"));
        $location.url("/");
    }
}])
