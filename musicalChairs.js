var chairs = angular.module('chairs', []);

chairs.controller('ChairController', [
    '$scope', '$interval', function($scope, $interval) {

        var timer;

        $scope.players = [
            "Charlotte",
            "Nora",
            "Philip",
            "Julie",
            "Auntie Lauren",
            "Pop Pop",
            "Gigi",
            "Uncle Cory",
            "Keegan"
        ];

        $scope.currentPlayers = $scope.players.slice(0)

        $scope.buttonAction = "Start Game";

        $scope.hasWinner = false;

        $scope.toggleGame = function() {
            angular.isDefined(timer) ? this.stopGame() : this.startGame();
        };

        $scope.startGame = function() {
            $scope.currentPlayers = $scope.players.slice(0);

            $scope.buttonAction = "Stop Game";
            $scope.currentName = "Get Ready...";
            $scope.hasWinner = false;

            timer = $interval(function() {
                var index = Math.floor(Math.random() * $scope.currentPlayers.length);

                var name = $scope.currentPlayers.splice(index, 1);

                if ($scope.currentPlayers.length == 0) {
                    name += " is the winner!";
                    $scope.hasWinner = true;
                    $scope.stopGame();
                }

                $scope.currentName = name;

            }, 2000, $scope.players.length);
        };

        $scope.stopGame = function() {
            $scope.buttonAction = "Start Game";
            $interval.cancel(timer);
            timer = undefined;
        };
    }
]);
