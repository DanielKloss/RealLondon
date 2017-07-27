app.controller('addMatchController', ['$scope', '$http', function ($scope, $http) {

    $scope.opposition;
    $scope.date;
    $scope.time;
    $scope.report;
    $scope.highlights;
    $scope.photos;

    $scope.players = [];
    $scope.playersModel = [];

    $http.get("data/players.txt")
    .then(function (response) {

        angular.forEach(response.data["players"], function (playerToAdd, key) {
            $scope.players.push(new player($scope.players.length, playerToAdd));
        });
    });

    $scope.addMatch = function () {
        var playersWhoPlayed = [];
        var playersWhoScored = [];
        var motm;

        angular.forEach($scope.playersModel, function (playerWhoPlayed, key) {
            playersWhoPlayed.push(playerWhoPlayed.id);

            if (playerWhoPlayed.goals > 0) {
                playersWhoScored.push(playerWhoPlayed.id)

                for (var i = 1; i < playerWhoPlayed.goals; i++) {
                    playersWhoScored.push(playerWhoPlayed.id);
                }
            }

            if (playerWhoPlayed.motm == 1) {
                motm = playerWhoPlayed.id;
            }
        });

        var report = "{'id':,'title':'Real London " + $scope.homeScore + " - " + $scope.awayScore + " " + $scope.opposition + "', 'date':'" + $scope.date + "', 'time':'" + $scope.time + "', 'form':'[]', 'leaguePosition':'unknown', 'scoutReport':'This match pre-dates the creation of the scouting department and so no report is available', 'report':'" + $scope.report + "', 'team':[" + playersWhoPlayed + "], 'motm':" + motm + ", 'goals':[" + playersWhoScored + "], 'highlights':" + $scope.highlights + ", 'photos':[" + $scope.photos + "]},";

        window.open('mailto:kloggjunk@hotmail.co.uk?subject=Match Report&body=' + report);
    }
}]);