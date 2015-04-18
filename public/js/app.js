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
        .when('/profile', {
          templateUrl: 'partials/profile.html'
        })
        .when('/dashboard', {
          templateUrl: 'partials/dashboard.html',
          controller: 'js/dashboard.js'
        })
        .when('/coming-soon', {
          templateUrl: 'partials/comingsoon.html'
        })
        .otherwise({
          redirectTo: '/'
      });
    }]);
