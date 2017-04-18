app.controller('topicController', ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    $scope.topics = {};
    var index = function(){
        if(!$cookies.get("user_id")){
            $location.url("/")
        }
        boardFactory.getTopics(function(data){
            $scope.topics = data.topics;
            $scope.categories = data.catagories;
        })
    }
    index();


    $scope.createTopic = function(){
        boardFactory.createTopic($scope.topic, function(data){
            console.log(data);
            if(data.errors){
                console.log(data.errors);
                $location.url("/topics");
            }
            else{
                $location.url("/topics");
            }
        })
    }
}])
