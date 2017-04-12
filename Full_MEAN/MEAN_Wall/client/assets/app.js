var app = angular.module('app', ['ngRoute', "ngCookies"]);
app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/all.html"
    })
    .when("/new",{
        templateUrl: "partials/new.html"
    })
    .when("/edit/:id",{
        templateUrl: "partials/edit.html"
    })
    .otherwise({
        templateUrl: "partials/all.html"
    })
})
