var app = angular.module('app', ['ngRoute', "ngCookies"]);
app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/new.html"
    })
    .when("/topics",{
        templateUrl: "partials/topic_area.html"
    })
    .when("/discussion",{
        templateUrl: "partials/discussion_area.html"
    })
    .when("/show",{
        templateUrl: "partials/show_user.html"
    })
    .otherwise({
        templateUrl: "partials/new.html"
    })
})
