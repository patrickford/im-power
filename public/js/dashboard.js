/* Copyright © 2015 I'm Power. All Rights Reserved. */ 

'use strict';

myApp.controller('dashboardController', ['$scope','$http', function($scope, $http) {

	$http.get('../data/sample-data.json').success (function(data) {
		$scope.sampleData = data;
	});

}]);

