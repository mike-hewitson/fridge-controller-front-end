'use strict';

/**
 * @ngdoc overview
 * @name fridgesApp
 * @description
 * # fridgesApp
 *
 * Main module of the application.
 */
// angular
//     .module('fridgesApp', [
//         'ngResource',
//         'ngRoute',
//         'ngSanitize',
//         'ngTouch',
//         'googlechart'
//     ])
//     .config(function($routeProvider) {
//         $routeProvider
//             .when('/', {
//                 templateUrl: 'views/main.html',
//                 controller: 'MainCtrl',
//                 controllerAs: 'main'
//             })
//             .when('/about', {
//                 templateUrl: 'views/about.html',
//                 controller: 'AboutCtrl',
//                 controllerAs: 'about'
//             })
//             .when('/history', {
//                 templateUrl: 'views/history.html',
//                 controller: 'HistoryChartCtrl',
//                 controllerAs: 'history'
//             })
//             .when('/summary', {
//                 templateUrl: 'views/summary.html',
//                 controller: 'SummaryChartCtrl',
//                 controllerAs: 'summary'
//             })
//             .otherwise({
//                 redirectTo: '/'
//             });
//     });

angular.module('fridgesApp', [
        'ui.router',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'googlechart'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                }
            }

        })

        // route for the aboutus page
        .state('app.about', {
            url: 'about',
            views: {
                'content@': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })

        // route for the contactus page
        .state('app.history', {
            url: 'history',
            views: {
                'content@': {
                    templateUrl: 'views/history.html',
                    controller: 'HistoryChartCtrl'
                }
            }
        })

        // route for the menu page
        .state('app.summary', {
            url: 'summary',
            views: {
                'content@': {
                    templateUrl: 'views/summary.html',
                    controller: 'SummaryChartCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    });
