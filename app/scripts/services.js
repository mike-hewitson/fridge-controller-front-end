'use strict';

angular.module('fridgesApp')
    .service('latestFactory', ['$resource', 'ENV', function($resource, ENV) {

        this.getLatest = function() {
            return $resource(ENV.baseURL + 'latest/');
        };
    }])
    .service('historyFactory', ['$resource', 'ENV', function($resource, ENV) {

        this.getHistory = function() {
            return $resource(ENV.baseURL + 'history/:id', null, {
                'get': { method: 'get', isArray: true }
            });
        };
    }])
    .service('summaryFactory', ['$resource', 'ENV', function($resource, ENV) {

        this.getSummary = function() {
            return $resource(ENV.baseURL + 'summary/:id', null, {
                'get': { method: 'get', isArray: true }
            });
        };
    }]);
