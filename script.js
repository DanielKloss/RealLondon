var app = angular.module("realLondonApp", ["ngRoute", "ui.bootstrap"]);

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
    $scope.noWrapSlides = false;
    $scope.activeSlide = 0;

    $http.get("data/matches.txt")
    .then(function (response) {
        angular.forEach(response.data["seasons"], function (season, key) {

            if (season["seasonId"] == $route.current.seasonNumber) {
                $scope.tab = 'report';

                $scope.matches = season["matches"];
                $scope.overview = season["seasonOverview"];
                $scope.title = season["seasonTitle"];

                angular.forEach(season.matches, function (match, key) {
                    for (var i = 0; i < match.photos.length; i++) {
                        match.photos[i] = match.photos[i] + "&show_text=false";
                    }

                    var numberExpression = /\d+/g;
                    var score;
                    var scores = [];
                    while ((score = numberExpression.exec(match.title)) != null) {
                        scores.push(score[0]);
                    }

                    if (scores.length < 2) {
                        match.winLoseDraw = "scout";
                    } else if (scores[0] > scores[1]) {
                        match.winLoseDraw = "win";
                    } else if (scores[0] < scores[1]) {
                        match.winLoseDraw = "lose";
                    } else {
                        match.winLoseDraw = "draw";
                    }

                    console.log(match["form"]);
                });
            }
        })
    });
});

app.controller('statsController', function ($scope, $http) {
    $scope.orderByField = 'appearances';
    $scope.reverseSort = true;
    $scope.players = [];

    $http.get("data/matches.txt")
    .then(function (response) {
        angular.forEach(response.data["seasons"], function (season, key) {
            angular.forEach(season["matches"], function (match, key) {

                //Get APPEARANCES
                angular.forEach(match["team"], function (team, key) {

                    var found = false;
                    var foundIndex = 0;
                    for (var i = 0; i < $scope.players.length; i++) {
                        if ($scope.players[i].name == team) {
                            found = true;
                            foundIndex = i;
                            break;
                        }
                    }

                    if (found) {
                        $scope.players[i].appearances++;
                    } else {
                        $scope.players.push(new player(team, 1, 0, 0));
                    }
                })

                //Get GOALS
                angular.forEach(match["goals"], function (goals, key) {

                    var found = false;
                    var foundIndex = 0;
                    for (var i = 0; i < $scope.players.length; i++) {
                        if ($scope.players[i].name == goals) {
                            found = true;
                            foundIndex = i;
                            break;
                        }
                    }

                    if (found) {
                        $scope.players[i].goals++;
                    }
                })

                //Get MOTMS
                var found = false;
                var foundIndex = 0;
                for (var i = 0; i < $scope.players.length; i++) {
                    if ($scope.players[i].name == match.motm) {
                        found = true;
                        foundIndex = i;
                        break;
                    }
                }

                if (found) {
                    $scope.players[i].motm++;
                }
            })
        })
    });

    $http.get("data/awards.txt")
    .then(function (response) {
        $scope.seasonAwards = response.data["seasonAwards"];
    });
});

function player(name, appearances, goals, motm) {
    this.name = name;
    this.appearances = appearances;
    this.goals = goals;
    this.motm = motm;
}

function seasonAwards(appearances, goals, motm, ratio) {
    this.appearances = appearances;
    this.goals = goals;
    this.motm = motm;
    this.ratio = ratio;
}




