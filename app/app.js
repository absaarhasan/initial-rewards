'use strict';

(function() {

  angular.module('irp', ['ui.router', 'irp.square', 'irp.triangle', 'irp.circle'])

      .directive('mainNav', mainNav)

      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

      }])

      .run(['$rootScope','$state' , function ($rootScope, $state) {

          $rootScope.$state = $state;


      }]);

})();


