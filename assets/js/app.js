'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    }).when('/lot', {
      templateUrl: '/templates/user.html',
      controller: 'LotCtrl'
    }).when('/sub', {
      templateUrl: '/templates/user.html',
      controller: 'SabjectCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
