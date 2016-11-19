auApp.controller('UserCtrl', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService) {
  var vm = this;

  $scope.formData = {};
  $scope.users = [];

  UserService.getUsers().then(function(response) {
    console.log(response);
    $scope.users = response;
  });

  $scope.addUser = function() {
    console.log("asdf");
    var user = $scope.user;

    console.log(user);

    UserService.addUser(user).then(function(response) {
      console.log(response);

      $scope.users.push(user);
      $scope.user = {};
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
