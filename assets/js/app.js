'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/userdetail/:id', {
        templateUrl: '/templates/user_detail.html',
        controller: 'LotCtrl'
      })
      .when('/users', {
        templateUrl: '/templates/users.html',
        controller: 'UserCtrl'
      })
      .when('/signup', {

      })
      .when('/login', {

      })
      .when('/logout', {

      })
      .otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
      });
  }]);

auApp.config(function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
