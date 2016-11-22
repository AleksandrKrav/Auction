'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/login.html',
      controller: 'UserCtrl'
    }).when('/users', {
      templateUrl: '/templates/user_detail.html',
      controller: 'UserCtrl'
    }).when('/userdetail/:id', {
      templateUrl: '/templates/user_detail.html',
      controller: 'LotCtrl'
    }).when('/sub', {
      templateUrl: '/templates/user.html',
      controller: 'SabjectCtrl'
    }).when('/users', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
