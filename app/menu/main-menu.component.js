'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('mainMenu').
  component('mainMenu', {
    templateUrl: 'menu/main-menu.template.html',
    controller: ['RestfulApi',
      function MainMenuController(RestfulApi) {
        var that = this;
        that.lang = 'zh';
        RestfulApi.get("/api/pub/catalog")
        .success(function (response) {
          console.log("response from api catalog");
          console.log(response);

          that.catalogs = response;
       });        
        /*
        console.log("data catalogs=");
        console.log(DataService.catalogs);
        this.catalogs = DataService.catalogs;
        this.orderProp = 'id';
        */
      }
    ]
  });