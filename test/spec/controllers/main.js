'use strict';
// var latestFixture = require('./latestFixture');
var latestFixture = [{
    '_id': '56f102d1c369bf0525c055f9',
    'date': '2016-03-22T08:31:13.158Z',
    'sensors': [{
        'hum': 56,
        'sensor': 'Ambient',
        'temp': 22.700000762939453
    }, {
        'hum': 8.100000381469727,
        'sensor': 'Fridge',
        'temp': 7.599999904632568
    }, {
        'hum': 56.599998474121094,
        'sensor': 'Curing',
        'temp': 3.700000047683716
    }]
}];

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('fridgesApp'));

    var MainCtrl,
        scope, $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, _$httpBackend_, $rootScope, latestFactory) {
        scope = $rootScope.$new();

        $httpBackend = _$httpBackend_;


        $httpBackend.expectGET('http://localhost:3000/latest').respond(latestFixture);

        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            latestFactory: latestFactory
                // place here mocked dependencies
        });

        $httpBackend.flush();

    }));

    it('should show get the latest reading', function() {

        expect(scope.showCurrent).toBe(true);
        expect(scope.message).toBe('');
        expect(scope.reading._id).toBe('56f102d1c369bf0525c055f9');
        expect(scope.reading.sensors.length).toBe(3);

    });
});
