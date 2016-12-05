/**
 * Created by Aleksandr on 19.11.2016.
 */
auApp.controller('LotCtrl', ['$scope', '$routeParams', 'LotService', 'UserService',
  function ($scope, $routeParams, LotService, UserService) {
    var userID = $routeParams.id;
    $scope.showForm = false;
    $scope.lots = [];

    LotService.getLots().then(function (response) {
      console.log(response);
      $scope.lots = response;
    });

    UserService.getUser(userID).then(function (response) {
      console.log(response);
      $scope.user = response;
    });

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
