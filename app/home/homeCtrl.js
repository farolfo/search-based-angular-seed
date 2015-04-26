'use strict';

angular.module('hitchhikeGPS.controllers')

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {

        $scope.result = {val: '', details: ''};
        $scope.searchOptions = {
            types: 'geocode'
        };

        $scope.search = function() {
            if ( ! $scope.result.details.geometry || ! $scope.result.details.geometry.location ) {
                $scope.searchFailed = true;
                return;
            }

            $state.go('hitchs', {
                lat: $scope.result.details.geometry.location.k,
                long: $scope.result.details.geometry.location.D
            }, {inherit: false});
        };

}]);
