app.controller('newController', ["$scope", "friendsFactory", "$location", function($scope, friendsFactory, $location){
    // $scope.friends = [];
    $scope.create = function(){
        console.log("CREATING NEW USER");
        friendsFactory.create($scope.newfriend, function(data){
            $scope.friends = data;
        })
        $location.url("/");
    }
}])
