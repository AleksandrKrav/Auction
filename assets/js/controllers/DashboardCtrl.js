/* globals auApp */
'use strict';
auApp.controller('DashboardCtrl', ['$scope', '$routeParams', 'LotService', 'UserService',
  function ($scope, $routeParams, LotService, UserService) {
    $scope.lots = [];

    LotService.getLots().then(function (response) {
      console.log(response);
      $scope.lots = response;
    });
  }]);
