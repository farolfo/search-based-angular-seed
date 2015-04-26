'use strict';

angular.module('hitchhikeGPS.controllers')

.controller('HeaderCtrl', ['$scope', '$modal', '$state', function($scope, $modal, $state) {
    $scope.openHitchhikeModal = function() {
        $modal.open({
            templateUrl: 'addHitchhike/addHitchhike.modal.html',
            controller: 'AddHitchhikeCtrl'
        });
    };

    $scope.$state = $state;
}]);
