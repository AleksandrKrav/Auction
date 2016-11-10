'use strict';

var userApp = angular.module('userApp', ['ngRoute', 'ui.bootstrap']);

userApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
