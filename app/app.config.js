/*
var ciciApp = angular.module( "ciciApp", ['ui.bootstrap'] );
ciciApp.controller( "CiciCtrl", [ '$scope', function($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
}]);
*/
'use strict';

app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<main-menu></main-menu><product-list></product-list><bottom></bottom>'
        }).
        when('/catalog/:catalogId', {
          template: '<main-menu></main-menu><catalog-detail></catalog-detail><bottom></bottom>'
        }).        
        when('/product/:productId', {
          template: '<main-menu></main-menu><product-detail></product-detail><bottom></bottom>'
        }).
        when('/menu', {
          template: '<main-menu></main-menu>'
        }).  
        when('/bottom', {
          template: '<bottom></bottom>'
        }).               
        otherwise('/products');
    }
  ]);
