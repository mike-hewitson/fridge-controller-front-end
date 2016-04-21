'use strict';

/**
 * @ngdoc function
 * @name fridgesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fridgesApp
 */
angular.module('fridgesApp')
    .controller('MainCtrl', ['$scope', 'latestFactory', function($scope, currentFactory) {

        $scope.showCurrent = false;
        $scope.message = 'Loading ...';
        currentFactory.getLatest().query(
            function(response) {
                $scope.reading = response[0];
                $scope.showCurrent = true;
            },
            function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            });

    }]);
