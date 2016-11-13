'use strict';

var auApp = angular.module('auApp', ['ngRoute', 'ui.bootstrap']);

auApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
