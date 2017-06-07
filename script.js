var app = angular.module("realLondonApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "stats.html",
        controller: "statsController"
    })
    .when("/season1", {
        templateUrl: "season.html",
        controller: "seasonController",
        seasonNumber: 1
    })
    .when("/season2", {
        templateUrl: "season.html",
        controller: "seasonController",
        seasonNumber: 2
    })
    .when("/stats", {
        templateUrl: "stats.html",
        controller: "statsController"
    })
    .when("/photos", {
        templateUrl: "photos.html",
        controller: "photosController"
    });
});

app.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

app.controller('seasonController', function ($scope, $route, $http) {
    $http.get("data/matches.txt")
    .then(function (response) {
        $scope.matches = response.data["season" + $route.current.seasonNumber];
        $scope.overview = response.data["seasonOverview" + $route.current.seasonNumber];
        $scope.title = response.data["seasonTitle" + $route.current.seasonNumber];
    });
});

app.controller('photosController', function ($scope, $http) {
    $http.get("data/photos.txt")
    .then(function (response) {
        angular.forEach(response.data["photos"], function(photo, key){
            photo += "&show_text=false";
        });
        
        $scope.photos = response.data["photos"];
    });
});

app.controller('statsController', function ($scope, $http) {
    $http.get("data/players.txt")
    .then(function (response) {
        $scope.players = response.data["players"];
        $scope.seasonAwards = response.data["seasonAwards"];
    });
});








