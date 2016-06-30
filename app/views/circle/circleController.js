'use strict';

(function() {

    angular.module('irp.circle', [])
        .controller('CircleCtrl',  CircleCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('circle', {
                    url: '/',
                    controller: 'CircleCtrl',
                    templateUrl: "views/circle/circle.html",
                    controllerAs: 'vm'
                })

        }]);

})();



function CircleCtrl() {

    var vm = this;


}