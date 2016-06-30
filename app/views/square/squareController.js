'use strict';

(function() {

    angular.module('irp.square', [])
        .controller('SquareCtrl',  SquareCtrl)
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



function SquareCtrl() {

    var vm = this;



}