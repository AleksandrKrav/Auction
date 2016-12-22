/**
 * Created by Aleksandr on 19.11.2016.
 */
/* globals auApp */
'use strict';
auApp.controller('LotCtrl', ['$scope', '$routeParams', 'LotService', 'UserService',
  function ($scope, $routeParams, LotService, UserService) {
    var userID = $routeParams.id;
    $scope.showForm = false;
    $scope.lots = [];

    if(userID){
      UserService.getUser(userID).then(function (response) {
        $scope.user = response;
      });
      LotService.getLotsByOwnerId(userID).then(function (response) {
        $scope.lots = response;
      });
    } else {
      LotService.getLots().then(function (response) {
        $scope.lots = response;
      });
    }

    $scope.addLot = function () {
      var lotInfo = {
        userId: userID,
        lotType: $scope.lot.type,
        lotPrice: $scope.lot.price,
        lotName: $scope.lot.name
      };
      LotService.addLot(lotInfo).then(function (response) {
        console.log(response);
        $scope.lots.push(response);
      });
    };

    $scope.setBet = function () {
      console.log($scope.formData);
      LotService.setBet($scope.BetData).then(function (response) {
        console.log(response);
      });
    };

    $scope.removeLot = function (lot) {
      LotService.removeLot(lot).then(function (response) {
        $scope.lots.splice($scope.lots.indexOf(lot), 1);
      });
    };
    $scope.makeLotActive = function (lot) {
      LotService.makeLotActive(lot).then(function (response) {

      });
    };
    $scope.makeLotInActive = function (lot) {
      LotService.makeLotInActive(lot).then(function (response) {

      });
    };

    $scope.editLot = function(lot){
      LotService.editLot(lot).then(function (response) {
        console.log(response);
      });
    };
  }]);
