var app = angular.module('app', ['ngRoute', "ngCookies"]);
app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/new.html"
    })
    .when("/board",{
        templateUrl: "partials/message_board.html"
    })
    .otherwise({
        templateUrl: "partials/new.html"
    })
})
