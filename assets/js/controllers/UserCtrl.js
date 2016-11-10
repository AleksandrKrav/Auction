userApp.controller('UserCtrl', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService) {
  $scope.formData = {};
  $scope.users = [];

  UserService.getUsers().then(function(response) {
    console.log(response);
    $scope.users = response;
  });

  $scope.addUser = function() {
    console.log($scope.formData);
    UserService.addUser($scope.formData).then(function(response) {
      console.log(response);
      $scope.users.push($scope.formData);
      $scope.formData = {};
    });
  };

  $scope.removeUser = function(user) {
    console.log(user);
    UserService.removeUser(user).then(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1);
      console.log(response);
    });
  };

}]);
