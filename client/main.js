angular
.module('auth0')
.controller('auth0Ctrl', ['$scope', '$meteor',
	function ($scope, $meteor) {

		$scope.tasks = [{
							text: 'This is task 1'
							}, {
							text: 'This is task 2'
							}, {
							text: 'This is task 3'
						}];

		$scope.runTestCases = function  () {
			console.log('runTestCases');
		};
	}]);