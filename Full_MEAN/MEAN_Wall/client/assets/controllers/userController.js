app.controller('userController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    $scope.enter = function(){
        boardFactory.enter($scope.user, function(data){
            console.log(data);
            if(data.errors){
                console.log(data.errors);
                $location.url("/");
            }
            else{
                $cookies.put("user_id", data._id);
                console.log($cookies.get("user_id"));
                $location.url("/board");
            }
        })
    }
}])
