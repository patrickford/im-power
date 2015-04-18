/* Copyright © 2015 I'm Power. All Rights Reserved. */ 

'use strict';

myApp.controller('dashboardController', ['$scope','$http', function($scope, $http) {

	$http.get('../data/sample-data.json').success (function(data) {
		$scope.medData = data;
	});

  // Tag drug listings as masters or duplicates for collapsable display
  var tagDuplicates = function() {
    for (var i = 0; i < $scope.medData.length; i++ ) {
      $scope.medData[i].rank = 'single';
      $scope.medData[i].showDuplicates = true;
      // Check for master listings
      if (i < $scope.medData.length-1) {
        if (($scope.medData[i].drug == $scope.medData[i+1].drug) && 
            (i == 0 || $scope.medData[i].drug != $scope.medData[i-1].drug)) {
          $scope.medData[i].rank = 'master';
        }
      }
      // Check for duplicate listings
      if (i > 0) {
        if ($scope.medData[i].drug == $scope.medData[i-1].drug) {
          $scope.medData[i].rank = "duplicate";
        }
      }
    }
  };

}]);

