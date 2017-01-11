'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider', '$httpProvider',
  function ($routeProvider, $httpProvider) {

    var exponentialInterval = 3000;
    $httpProvider.interceptors.push(function($q, $timeout, $injector) {
      return {
        'responseError': function(responseError) {
          console.log('responseError', responseError);
          if(responseError.status == -1) {
            $timeout(function(){
              var $http = $injector.get('$http');
              $http(responseError.config);
              exponentialInterval *= 2;
            }, exponentialInterval);
          } else {
            return responseError;
          }
        }
      };
    });
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
        templateUrl: '/views/login.ejs',
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
