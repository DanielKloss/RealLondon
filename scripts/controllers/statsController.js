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