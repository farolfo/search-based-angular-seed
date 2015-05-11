'use strict';

angular.module('myApp.controllers')

.controller('ResultsCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

  if ( ! $stateParams.lat || ! $stateParams.long ) {
      $state.go('home');
  }

  $scope.lat = $stateParams.lat;
  $scope.long = $stateParams.long;
  
}]);
