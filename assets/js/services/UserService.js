userApp.service('UserService', function($http, $q) {
  return {
    'getUsers': function() {
      var defer = $q.defer();
      $http.get('/user/getUsers').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addUser': function(user) {
      console.log(user);
      var defer = $q.defer();
      $http.post('/user/addUser', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeUser': function(user) {
      console.log(user);
      var defer = $q.defer();
      $http.post('/user/removeUser', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
