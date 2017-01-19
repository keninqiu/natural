'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('bottom').
  component('bottom', {
    templateUrl: 'layout/bottom.template.html',
    controller: ['$rootScope',
      function BottomController($rootScope) {

      }      
    ]
  });