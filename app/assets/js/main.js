"use strict";function CircleCtrl(){}function mainNav(){var a={restrict:"A",replace:!0,templateUrl:"views/shared/nav.html"};return a}function SquareCtrl(){}function TriangleCtrl(){}function SquareCtrl(a){}function squareService(){return{}}!function(){angular.module("irp",["ui.router","irp.square","irp.triangle","irp.circle"]).directive("mainNav",mainNav).config(["$urlRouterProvider",function(a){a.otherwise("/")}]).run(["$rootScope","$state",function(a,b){a.$state=b}])}(),function(){angular.module("irp.circle",[]).controller("CircleCtrl",CircleCtrl).config(["$stateProvider",function(a){a.state("circle",{url:"/",controller:"CircleCtrl",templateUrl:"views/circle/circle.html",controllerAs:"vm"})}])}(),function(){angular.module("irp.square",[]).controller("SquareCtrl",SquareCtrl).config(["$stateProvider",function(a){a.state("square",{url:"/",controller:"SquareCtrl",templateUrl:"views/square/square.html",controllerAs:"vm"})}])}(),function(){angular.module("irp.triangle",[]).controller("TriangleCtrl",TriangleCtrl).config(["$stateProvider",function(a){a.state("triangle",{url:"/",controller:"TriangleCtrl",templateUrl:"views/triangle/triangle.html",controllerAs:"vm"})}])}(),function(){angular.module("irp.square",[]).controller("SquareCtrl",SquareCtrl).factory("squareService",squareService).config(["$stateProvider",function(a){a.state("square",{url:"/",controller:"SquareCtrl",templateUrl:"views/square/square.html",controllerAs:"vm"})}])}(),SquareCtrl.$inject=["squareService"];