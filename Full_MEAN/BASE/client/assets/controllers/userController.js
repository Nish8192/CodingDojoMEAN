app.controller('userController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    $scope.flag = false;
    if(!$cookies.get('user_id')){
        $scope.flag = false;
        $location.url('/');
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $scope.flag = false;
        $location.url('/');
    }
}])
