import 'angular-mocks';
describe('Todo Controller Test', function () {
    var scope ,controller,ChatCtrl;
    beforeEach(angular.mock.module('auth0'));
    beforeEach(angular.mock.inject(function($rootScope,$controller) {
        scope = $rootScope.$new();
        rootScope = $rootScope.$new();

        controller = $controller('auth0Ctrl', {
            $scope: scope,
            $rootScope: rootScope
        })
    }));

    describe('auth0Ctrl', function() {
        it('Should have controller', function () {
            expect(controller).not.toBeUndefined();
        });
    });
});