'use strict';

(function() {

    angular.module('irp.triangle', [])
        .controller('TriangleCtrl',  TriangleCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('triangle', {
                    url: '/',
                    controller: 'TriangleCtrl',
                    templateUrl: "views/triangle/triangle.html",
                    controllerAs: 'vm'
                })

        }]);

})();



function TriangleCtrl() {

    var vm = this;



}