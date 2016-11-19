auApp.controller('SabjectCtrl', ['$scope', '$rootScope', 'SabjectService', function($scope, $rootScope, SabjectService) {

  SabjectService.getSabjects().then(function(response) {
    console.log(response);
    $scope.sabjects = response;
  });

}]);
