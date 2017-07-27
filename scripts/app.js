var app = angular.module('realLondonApp', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/stats.html",
        controller: "statsController"
    })
    .when("/season1", {
        templateUrl: "views/season.html",
        controller: "seasonController",
        seasonNumber: 1
    })
    .when("/season2", {
        templateUrl: "views/season.html",
        controller: "seasonController",
        seasonNumber: 2
    })
    .when("/stats", {
        templateUrl: "views/stats.html",
        controller: "statsController"
    })
    .when("/addMatch", {
        templateUrl: "views/addMatch.html",
        controller: "addMatchController"
    })
});