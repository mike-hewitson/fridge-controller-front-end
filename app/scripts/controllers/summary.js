'use strict';

/**
 * @ngdoc function
 * @name fridgesApp.controller:MainCtrl
 * @description
 * # HistoryCtrl
 * Controller of the fridgesApp
 */
angular.module('fridgesApp')
    .controller('SummaryChartCtrl', ['$scope', 'summaryFactory', function($scope, summaryFactory) {

        $scope.showData = false;
        $scope.message = 'Loading ...';
        summaryFactory.getSummary().query(
            function(response) {
                $scope.summary = response;
                $scope.showData = true;
                $scope.message = '';

                $scope.chartObject = {};
                var cols = [
                    { id: 'x', label: 'Date', type: 'string' },
                    { id: 's', label: 'Maximum', type: 'number' },
                    { id: 's', label: 'Average', type: 'number' },
                    { id: 's', label: 'Minimum', type: 'number' }
                ];

                var rows = [];
                for (var i = 0; i < $scope.summary.length; i++) {
                    rows.push({
                        c: [{ v: $scope.summary[i]._id.date },
                            { v: $scope.summary[i].maxTemp.toFixed(1) },
                            { v: $scope.summary[i].avgTemp.toFixed(1) },
                            { v: $scope.summary[i].minTemp.toFixed(1) }
                        ]
                    });
                }

                $scope.chartObject.type = 'LineChart';

                $scope.chartObject.data = {
                    'cols': cols,
                    'rows': rows
                };

                $scope.chartObject.options = {
                    'title': 'Ambient Conditions',
                    curveType: 'function',
                    smoothLine: true,
                    series: {
                        0: { targetAxisIndex: 0, type: 'line' }
                    },
                    vAxes: [
                        { title: 'Degrees C' }
                    ]
                };

            },
            function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            });

    }]);
