auApp.controller('UserCtrl', ['$scope', '$rootScope', '$location', 'UserService',
  function($scope, $rootScope, $location, UserService) {

  $scope.users = [];

  UserService.getUsers().then(function(response) {
    console.log(response);
    $scope.users = response;
  });

  $scope.addUser = function() {
    var user = $scope.user;

    UserService.addUser(user).then(function(response) {
      console.log(response);
      $location.path('/dashboard');
    });
  };

  $scope.getDetail = function(id){
    console.log(id);
    $location.path('/userdetail/' + id);
  };

  $scope.removeUser = function(user) {

    UserService.removeUser(user).then(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1);
      console.log(response);
    });
  };

}]);
