app.service('playerService', ['$http', function ($http) {

    var playerResponse;

    $http.get("data/players.txt")
    .then(function (response) {
        playerResponse = response;
    });

    this.GetPlayerName = function (id) {
        return playerResponse.data["players"][id];
    }
}]);