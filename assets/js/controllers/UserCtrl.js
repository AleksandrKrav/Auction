/* globals auApp */
'use strict';
auApp.controller('UserCtrl', ['$scope', '$rootScope', '$location', 'UserService',
  function($scope, $rootScope, $location, UserService) {

  $scope.users = [];

  UserService.getUsers().then(function(response) {
    $scope.users = response;
  });

  $scope.addUser = function() {
    var user = $scope.user;

    UserService.addUser(user).then(function(response) {
      $location.path('/dashboard');
    });
  };

  $scope.getDetail = function(id){
    $location.path('/userdetail/' + id);
  };

  $scope.removeUser = function(user) {
    UserService.removeUser({id: user.id}).then(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1);
    });
  };

  $scope.editUser = function(user){
    UserService.editUser({user: user}).then(function(resp){
      console.log(resp);
    });
  };
}]);
