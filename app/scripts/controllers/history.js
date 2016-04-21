'use strict';


function getSensorByName(name, sensors) {
    return sensors.filter(
        function(sensor) {
            return sensor.sensor === name;
        }
    );
}

function buildRows(sensor, readings) {

    // var SimpleMovingAverage = require('simplemovingaverage');
    var smaTemps = new SimpleMovingAverage();
    var smaHums = new SimpleMovingAverage();
    var intWindowSize = 5;

    var rows = [];
    var temps = [];
    var hums = [];
    var newTemps = [];
    var newHums = [];

    for (var i = 0; i < readings.length; i++) {
        var data = getSensorByName(sensor, readings[i].sensors)[0];
        temps.push(data.temp);
        hums.push(data.hum);
    }

    newTemps = smaTemps.get(temps, intWindowSize);
    newHums = smaHums.get(hums, intWindowSize);

    var j;
    for (i = 0; i < newTemps.length; i++) {
        j = i * intWindowSize;
        rows.push({ c: [{ v: new Date(readings[j].date) }, { v: newTemps[i] }, { v: newHums[i] }] });
    }

    return rows;
}

function buildChart(sensor, readings) {
    var chartObject = {};
    var cols = [
        { id: 't', label: 'Date', type: 'string' },
        { id: 's', label: 'Temperature', type: 'number' },
        { id: 's', label: 'Humidity', type: 'number' }
    ];
    var rows = buildRows(sensor, readings);
    var title = sensor + ' Conditions';
    chartObject.type = 'LineChart';
    chartObject.data = {
        'cols': cols,
        'rows': rows
    };

    chartObject.options = {
        'title': title,
        curveType: 'function',
        smoothLine: true,
        series: {
            0: { targetAxisIndex: 0, type: 'line' },
            1: { targetAxisIndex: 1, type: 'line' }
        },
        vAxes: [
            { title: 'Degrees C' },
            { title: 'Percentage' }
        ]
    };
    return chartObject;

}

/**
 * @ngdoc function
 * @name fridgesApp.controller:MainCtrl
 * @description
 * # HistoryCtrl
 * Controller of the fridgesApp
 */
angular.module('fridgesApp')
    .controller('HistoryCtrl', ['$scope', 'historyFactory', function($scope, historyFactory) {

        $scope.showData = false;
        $scope.message = 'Loading ...';
        historyFactory.getReadings().query(
            function(response) {
                $scope.readings = response;
                $scope.showData = true;
            },
            function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            });

    }])
    .controller('HistoryChartCtrl', ['$scope', 'historyFactory', function($scope, historyFactory) {

        $scope.showData = false;
        $scope.message = 'Loading ...';
        historyFactory.getHistory().query(
            function(response) {
                $scope.readings = response;
                $scope.showData = true;
                $scope.message = '';

                // Build chart objects
                //Methods

                // init();

                $scope.chartObject1 = {};

                function hideSeries(selectedItem) {
                    var col = selectedItem.column;
                    if (selectedItem.row === null) {
                    console.log('--- col', col);
                        if ($scope.chartObject1.view.columns[col] === col) {
                            $scope.chartObject1.view.columns[col] = {
                                label: $scope.chartObject1.data.cols[col].label,
                                type: $scope.chartObject1.data.cols[col].type,
                                calc: function() {
                                    return null;
                                }
                            };
                            $scope.chartObject1.options.colors[col - 1] = '#CCCCCC';
                        } else {
                            $scope.chartObject1.view.columns[col] = col;
                            $scope.chartObject1.options.colors[col - 1] = $scope.chartObject1.options.defaultColors[col - 1];
                        }
                    }
                }

                console.log('switching on');
                $scope.hideSeries = hideSeries;

                $scope.chartObject1 = buildChart('Ambient', $scope.readings);

                $scope.chartObject1.view = {
                    columns: [0, 1, 2]
                };

                console.log('switching off');
                $scope.hideSeries(2);

                $scope.chartObject2 = buildChart('Curing', $scope.readings);
                $scope.chartObject3 = buildChart('Fridge', $scope.readings);


            },
            function(response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
            });

    }]);
