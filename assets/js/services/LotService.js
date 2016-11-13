auApp.service('LotService', function($http, $q) {
  return {
    'setBet': function(bet) {
      var defer = $q.defer();
      $http.post('/lot/setBet', bet).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addLot': function(lot) {
      console.log(lot);
      var defer = $q.defer();
      $http.post('/lot/addLot', lot).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeLot': function(lot) {
      console.log(lot);
      var defer = $q.defer();
      $http.post('/lot/removeLot', lot).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'makeLotActive': function(lot) {
      console.log(lot);
      var defer = $q.defer();
      $http.post('/lot/makeLotActive', lot).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'makeLotInActive': function(lot) {
      console.log(lot);
      var defer = $q.defer();
      $http.post('/lot/makeLotInActive', lot).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
