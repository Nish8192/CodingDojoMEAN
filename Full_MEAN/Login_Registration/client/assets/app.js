var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/registration.html"
    })
    .when("/login",{
        templateUrl: "partials/login.html"
    })
    .when("/success",{
        templateUrl: "partials/success.html"
    })
    .otherwise({
        templateUrl: "partials/registration.html"
    })
})
