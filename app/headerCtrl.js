'use strict';

angular.module('myApp.controllers')

.controller('HeaderCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.$state = $state;
}]);
