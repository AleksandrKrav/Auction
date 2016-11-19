/**
 * Created by Aleksandr on 19.11.2016.
 */
auApp.controller('LotCtrl', ['$scope', '$rootScope', 'LotService', function($scope, $rootScope, LotService) {
  $scope.setBet = function() {
    console.log($scope.formData);
    //ToDo: init BetData
    LotService.setBet($scope.BetData).then(function(response) {
      console.log(response);
    });
  };
  $scope.addLot = function() {
    console.log($scope.formData);
    //ToDo: init LotData
    LotService.addLot($scope.LotData).then(function(response) {
      console.log(response);
    });
  };
  $scope.removeLot = function(lot) {
    console.log(lot);
    LotService.removeLot(lot).then(function(response) {

    });
  };
  $scope.makeLotActive = function(lot) {
    console.log(lot);
    LotService.makeLotActive(lot).then(function(response) {

    });
  };
  $scope.makeLotInActive = function(lot) {
    console.log(lot);
    LotService.makeLotInActive(lot).then(function(response) {

    });
  };
}]);
