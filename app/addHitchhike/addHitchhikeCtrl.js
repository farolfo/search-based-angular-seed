'use strict';

angular.module('hitchhikeGPS.controllers')

.controller('AddHitchhikeCtrl', ['$scope', 'hitchs', function($scope, hitchs) {
  if(!navigator.geolocation) {
    $scope.geolocationFailed = true;
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    $scope.$apply(function () {
      $scope.currentPosition = position;
    });
  });

  $scope.confirm = function() {
    var reqBody = {
      "lat": $scope.currentPosition.coords.latitude,
      "long": $scope.currentPosition.coords.longitude
    };

    hitchs.save({}, reqBody).$promise.then(function(todo) {
        // success
        $scope.$close();
      }, function(errResponse) {
        // fail
        $scope.$close();
      });
  };
}]);
