app.controller('allController', ["$scope", "friendsFactory", "$location", function($scope, friendsFactory, $location){
    // $scope.friends = [];
    (function(){
        friendsFactory.index(function(data){
            $scope.friends = data.friends;
        })
        $location.url("/friends")
    }())
    $scope.createNew = function(){
        console.log("CREATE NEW")
        $location.url("/new");
    }
    $scope.delete = function(id){
        friendsFactory.delete(id);
        $location.url("/");
    }
    $scope.showEdit = function(id){
        $location.url("/edit/"+id);
    }
}])
