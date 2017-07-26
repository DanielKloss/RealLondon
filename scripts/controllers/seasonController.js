app.controller('seasonController', function ($scope, $route, $http) {
    $scope.noWrapSlides = false;
    $scope.activeSlide = 0;

    $scope.playerResponse;

    $http.get("data/players.txt")
    .then(function (response) {
        playerResponse = response;
    });

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
                });
            }
        })
    });

    $scope.GetPlayerName = function (id) {
        return playerResponse.data["players"][id];
    }
});