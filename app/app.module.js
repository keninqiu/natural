'use strict';

// Define the `phonecatApp` module
var app = angular.module('ciciApp', [
  'ngRoute',
  'RestfulApi',
  'DataService',
  'productList',
  'productDetail',
  'catalogDetail',
  'mainMenu',
  'ui.bootstrap',
  'pascalprecht.translate'
]);
