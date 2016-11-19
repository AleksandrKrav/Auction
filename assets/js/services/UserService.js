auApp.service('UserService', function($http, $q) {
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
    'getUser': function(user_id){
      console.log(user_id);
      var defer = $q.defer();
      $http.post('/user/getUser', ({user_id : user_id})).success(function(resp){
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
