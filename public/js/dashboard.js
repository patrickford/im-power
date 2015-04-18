/* Copyright © 2014 RelayHealth Corporation. All Rights Reserved. */ 

'use strict';

myApp.controller('medAllergiesController', ['$scope','$http', function($scope, $http) {

	$http.get('../data/med-data.json').success (function(data) {
		$scope.medData = data;
    tagDuplicates();
	});
	$http.get('../data/allergiesMed-data.json').success (function(data) {
		$scope.allergiesMedData = data;
	});
	$http.get('../data/allergiesEnv-data.json').success (function(data) {
		$scope.allergiesEnvData = data;
	});
	$http.get('../data/patients-data.json').success (function(data) {
		$scope.patientData = data;
	});

  // Load appropriate view template for phone or large screen display
  var getViewForDevice = function() {
    return Modernizr.mq('screen and (max-width: 414px) and (orientation: portrait)') ?
          'partials/hr-medAllergies-sm.html' :
          'partials/hr-medAllergies-lg.html';
    };

  $scope.template = getViewForDevice();

  // Reload view if window is resized
  $scope.changeTemplate = function() {
    $scope.template = getViewForDevice();
  };
  
  // Listen for device orientation change and trigger view change
  window.onresize = function changeTemplate() {
    $scope.template = getViewForDevice();
    $scope.$digest();
  };

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

 $scope.toggleDuplicates = function(index) {
    // Toggle value for master drug of group
    $scope.medData[index].showDuplicates = !$scope.medData[index].showDuplicates; 
    index++;    
    // Toggle values for duplicate drugs in group
    while (index < $scope.medData.length && $scope.medData[index].rank == 'duplicate') {
      $scope.medData[index].showDuplicates = !$scope.medData[index].showDuplicates;
      index++;
    }
  };

}]);

myApp.controller('addMedicationController', ['$scope','$http', function($scope, $http) {

  // Load sample data for autocomplete typeahead
  $http.get('../data/medicationExample-data.json').success (function(data) {
    $scope.medicationExamples = data;
  });
   
  $scope.selected = undefined;
  $scope.addedMedications = [];

  $scope.addMedication = function() {
    if ($('#addMedication').val() !== "") {
      $scope.addedMedications.push($('#addMedication').val());
      $scope.selected = undefined;
    }
  };

  $scope.removeMedication = function(item) {
    $scope.addedMedications.splice(item,1);
  };

}]);

myApp.controller('addAllergiesMedController', ['$scope','$http', function($scope, $http) {

  // Load sample data for autocomplete typeahead
  $http.get('../data/medicationExample-data.json').success (function(data) {
    $scope.allergiesMedExamples = data;
  });
   
  $scope.selected = undefined;
  $scope.addedAllergiesMed = [];

  $scope.addAllergiesMed = function() {
    if ($('#addAllergiesMed').val() !== "") {
      $scope.addedAllergiesMed.push($('#addAllergiesMed').val());
      $scope.selected = undefined;
    }
  };

  $scope.removeAllergiesMed = function(item) {
    $scope.addedAllergiesMed.splice(item,1);
  };

}]);

  myApp.controller('addAllergiesEnvController', ['$scope','$http', function($scope, $http) {

  // Load sample data for autocomplete typeahead
  $http.get('../data/allergiesEnvExample-data.json').success (function(data) {
    $scope.allergiesEnvExamples = data;
  });
   
  $scope.selected = undefined;
  $scope.addedAllergiesEnv = [];

  $scope.addAllergiesEnv = function() {
    if ($('#addAllergiesEnv').val() !== "") {
      $scope.addedAllergiesEnv.push($('#addAllergiesEnv').val());
      $scope.selected = undefined;
    }
  };

  $scope.removeAllergy = function(item) {
    $scope.addedAllergiesEnv.splice(item,1);
  };

}]);
