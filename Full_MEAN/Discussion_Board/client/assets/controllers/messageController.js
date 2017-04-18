app.controller('messageController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    $scope.messages = {};
    var index = function(){
        if(!$cookies.get('user_id')){
            $location.url('/');
        }
        boardFactory.getMessages(function(data){
            $scope.messages = data.messages;
            $scope.topic = data.topic;
        })
    }
    index();

    $scope.message = {};
    $scope.createMessage = function(){
        $scope.message._user = $cookies.get("user_id")
        $scope.message.likes = 0
        $scope.message.dislikes = 0
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
