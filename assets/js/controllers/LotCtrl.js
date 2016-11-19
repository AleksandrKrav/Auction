/**
 * Created by Aleksandr on 19.11.2016.
 */
auApp.controller('LotCtrl', ['$scope', '$rootScope', '$routeParams', 'LotService', 'UserService',
  function ($scope, $rootScope, $routeParams, LotService, UserService) {
    var userID = $routeParams.id;
    $scope.showForm = false;

    UserService.getUser(userID).then(function (response) {
      console.log(response);
      $scope.user = response;
    });

    $scope.setBet = function () {
      console.log($scope.formData);
      LotService.setBet($scope.BetData).then(function (response) {
        console.log(response);
      });
    };

    $scope.addLot = function () {
      console.log('Sub name ' + $scope.sub.name);
      console.log('lot price ' + $scope.lot.price);
      console.log('lot name ' + $scope.lot.name);
      var lotInfo = {
        userId: userID,
        sabjectName: $scope.sub.name,
        lotPrice:  $scope.lot.price,
        lotName: $scope.lot.name
      };
      LotService.addLot($scope.lotInfo).then(function(response) {
        console.log(response);
      });
    };
    $scope.removeLot = function (lot) {
      console.log(lot);
      LotService.removeLot(lot).then(function (response) {

      });
    };
    $scope.makeLotActive = function (lot) {
      console.log(lot);
      LotService.makeLotActive(lot).then(function (response) {

      });
    };
    $scope.makeLotInActive = function (lot) {
      console.log(lot);
      LotService.makeLotInActive(lot).then(function (response) {

      });
    };
  }]);
