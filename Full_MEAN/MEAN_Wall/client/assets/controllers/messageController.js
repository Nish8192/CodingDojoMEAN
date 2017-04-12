app.controller('messageController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    var index = function(){
        boardFactory.getMessages(function(data){
            $scope.messages = data.messages;
        })
    }
    index();
    $scope.createMessage = function(){
        boardFactory.createMessage($scope.message, $cookies.get("user_id"), function(data){
            if(data.errors){
                console.log(data.errors);
            }
            index();
            $scope.message = {};
        })
    }
    $scope.logout = function(){
        $cookies.remove("user_id");
        $location.url("/");
    }
    $scope.createComment = function(message_id){
        boardFactory.createComment($scope.comment, $cookies.get("user_id"), message_id, function(data){
            console.log(data);
            if(data.errors){
                console.log(data.errors);
            }
            index();
            $scope.comment = {};
        })
    }
}])
