'use strict';

/**
 * @ngdoc function
 * @name fridgesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fridgesApp
 */
angular.module('fridgesApp')
    .controller('MainCtrl', ['$scope', 'latestFactory', function($scope, latestFactory) {

        $scope.showCurrent = false;
        $scope.message = 'Loading ...';
        latestFactory.getLatest().query(
            function(response) {
                $scope.showCurrent = true;
                $scope.message = '';
                $scope.reading = response[0];
            },
            /* istanbul ignore next */
            function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            });

    }]);
