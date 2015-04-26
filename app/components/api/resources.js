'use strict';

angular.module('hitchhikeGPS.services')

    .factory('hitchs', function ($resource) {
        return $resource('https://mochilero-api.herokuapp.com/hitchs');
    });
