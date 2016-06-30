'use strict';

(function() {

    angular.module('irp.square', [])
        .controller('SquareCtrl',  SquareCtrl)
        .factory('squareService',  squareService)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('square', {
                    url: '/',
                    controller: 'SquareCtrl',
                    templateUrl: "views/square/square.html",
                    controllerAs: 'vm'
                })

        }]);

})();

SquareCtrl.$inject = [ 'squareService'];

function SquareCtrl(squareService) {

    var vm = this;

 //   vm.tweets = tweets;


}