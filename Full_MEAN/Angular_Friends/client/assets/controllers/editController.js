app.controller("editController", ["$scope", "friendsFactory", "$location", "$routeParams", function($scope, friendsFactory, $location, $routeParams){
    $scope.friend = {};
    (function(id){
        friendsFactory.show(id, function(data){
            console.log(data);
            $scope.friend = data;
            console.log($scope.friend);
        })
    }($routeParams.id))
    $scope.update = function(id){
        friendsFactory.update(id, $scope.friend);
        friendsFactory.index(function(data){
            $scope.friends = data;
        })
        $location.url("/");
    }

    $scope.delete = function(id){
        friendsFactory.delete(id, function(data){
            $scope.friends = data;
        })
    }
}])
