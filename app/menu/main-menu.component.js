'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('mainMenu').
  component('mainMenu', {
    templateUrl: 'menu/main-menu.template.html',
    controller: ['DataService',
      function MainMenuController(DataService) {
        this.catalogs = DataService.catalogs;
        this.orderProp = 'id';
      }
    ]
  });