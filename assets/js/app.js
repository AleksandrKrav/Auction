'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/login.html',
      controller: 'UserCtrl'
    }).when('/dashboard', {
      templateUrl: '/templates/dashboard.html',
      controller: 'DashboardCtrl'
    }).when('/userdetail/:id', {
      templateUrl: '/templates/user_detail.html',
      controller: 'LotCtrl'
    }).when('/users', {
      templateUrl: '/templates/users.html',
      controller: 'UserCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
