'use strict';

/**
 * @ngdoc overview
 * @name fridgesApp
 * @description
 * # fridgesApp
 *
 * Main module of the application.
 */
angular
    .module('fridgesApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'googlechart'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/history', {
                templateUrl: 'views/history.html',
                controller: 'HistoryCtrl',
                controllerAs: 'history'
            })
            .when('/summary', {
                templateUrl: 'views/summary.html',
                controller: 'SummaryCtrl',
                controllerAs: 'summary'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
