auApp.service('SabjectService', function($http, $q) {
  return {
    'getSabjects': function() {
      var defer = $q.defer();
      $http.get('/user/getSabjects').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
