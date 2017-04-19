app.controller('userController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    if(!$cookies.get('user_id')){
        $location.url('/');
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $location.url('/');
    }
}])
