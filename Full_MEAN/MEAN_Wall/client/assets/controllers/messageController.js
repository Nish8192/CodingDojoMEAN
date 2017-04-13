app.controller('messageController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    var index = function(){
        if(!$cookies.get('user_id')){
            $location.url('/');
        }
        boardFactory.getMessages(function(data){
            // console.log(data);
            $scope.messages = data.messages;
        })
    }
    index();
    $scope.message = {};

    $scope.createMessage = function(){
        console.log($scope);
        console.log($scope.message);
        boardFactory.createMessage($scope.message, $cookies.get("user_id"), function(data){
            if(data.errors){
                console.log(data.errors);
            }
            // console.log("MESSAGE");
            index();
            $scope.message = {};
        })
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $location.url("/");
    }

    $scope.newComment = {};
    $scope.createComment = function(message_id, i){
        boardFactory.createComment($scope.newComment[i], $cookies.get("user_id"), message_id, function(data){
            console.log(data);
            if(data.errors){
                console.log(data.errors);
            }
            // console.log("HERE");
            index();
            $scope.newComment[i] = {};
        })
    }
}])
