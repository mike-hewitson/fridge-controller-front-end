'use strict';

angular.module('fridgesApp')
    .service('latestFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getLatest = function() {
            return $resource(baseURL + 'latest/');
        };
    }])
    .service('historyFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getHistory = function() {
            return $resource(baseURL + 'history/:id', null, {
                'get': { method: 'get', isArray: true }
            });
        };
    }])
    .service('summaryFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getSummary = function() {
            return $resource(baseURL + 'summary/:id', null, {
                'get': { method: 'get', isArray: true }
            });
        };
    }]);
