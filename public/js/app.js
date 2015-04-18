/* Copyright © 2015 I'm Power. All Rights Reserved. */ 

'use strict';

var myApp = angular.module('myApp', 
  [
    'ngRoute', 
    'ui.bootstrap', 
    'ngAnimate'
    ]);

  myApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html'
        })
        .when('/home', {
          templateUrl: 'partials/home.html'
        })    
        .when('/accounts', {
          templateUrl: 'partials/account-form.html'
        })
        .when('/coming-soon', {
          templateUrl: 'partials/comingsoon.html'
        })
        .otherwise({
          redirectTo: '/'
      });
    }]);
