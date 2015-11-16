var chairs = angular.module('chairs', []);

chairs.controller('ChairController', [
    '$scope', '$interval', function($scope, $interval) {

        var timer;

        $scope.players = [
            "Charlotte",
            "Nora",
            "Daddy",
            "Mommy"
        ];

        $scope.buttonAction = "Start Game";

        $scope.hasWinner = false;

        $scope.toggleGame = function() {
            angular.isDefined(timer) ? this.stopGame() : this.startGame();
        };

        $scope.startGame = function() {
            var players = $scope.players.slice(0);

            $scope.buttonAction = "Stop Game";
            $scope.currentName = "Get Ready...";
            $scope.hasWinner = false;

            timer = $interval(function() {
                var index = Math.floor(Math.random() * players.length);

                var name = players.splice(index, 1);

                if (players.length == 0) {
                    name += " is the winner!";
                    $scope.hasWinner = true;
                    $scope.stopGame();
                }

                $scope.currentName = name;

            }, 5000, $scope.players.length);
        };

        $scope.stopGame = function() {
            $scope.buttonAction = "Start Game";
            $interval.cancel(timer);
            timer = undefined;
        };
    }
]);
