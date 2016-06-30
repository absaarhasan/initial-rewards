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
'use strict';

/* main nav */

function mainNav() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/nav.html'
    };
    return directive;

}








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
'use strict';



function squareService() {

    return {}

}