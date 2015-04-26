'use strict';

angular.module('hitchhikeGPS.controllers', []);
angular.module('hitchhikeGPS.services', []);
angular.module('hitchhikeGPS.directives', []);

angular.module('hitchhikeGPS', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'hitchhikeGPS.controllers',
  'hitchhikeGPS.services',
  'hitchhikeGPS.directives',
  'ngAutocomplete'
]);

angular.module('hitchhikeGPS').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
          })

        .state('hitchs', {
            url: '/hitchs?lat&long',
            templateUrl: 'hitchs/hitchs.html',
            controller: 'HitchsCtrl'
        });
})

.run(function() {

});
