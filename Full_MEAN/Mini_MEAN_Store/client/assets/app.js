var app = angular.module('app', ['ngRoute', "ngCookies"]);
app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/dashboard.html"
    })
    .when("/products",{
        templateUrl: "partials/products.html"
    })
    .when("/orders",{
        templateUrl: "partials/orders.html"
    })
    .when("/customers",{
        templateUrl: "partials/customers.html"
    })
    .otherwise({
        templateUrl: "partials/dashboard.html"
    })
})
