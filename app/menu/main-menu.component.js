'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('mainMenu').
  component('mainMenu', {
    templateUrl: 'menu/main-menu.template.html',
    controller: ['RestfulApi','$rootScope','$scope',
      function MainMenuController(RestfulApi,$rootScope) {
        var that = this;

        that.setLang = function setLang(lang) {
          that.lang = lang;
          $rootScope.lang = lang;
        };

        that.lang = 'zh';
        $rootScope.lang = 'zh';
        RestfulApi.get("/api/pub/catalog")
        .success(function (response) {
          console.log("response from api catalog");
          console.log(response);

          that.catalogs = response;

       });    

        RestfulApi.get("/api/pub/text")
        .success(function (response) {

          var i,item,id,name,value,value_zh;

          that.text = {};
          for (i = 0; i < response.length; i++) {
              item = response[i];
              id = item.id;
              name = item.name;
              value = item.value;
              value_zh = item.value_zh;
              that.text[name] = {
                value:value,
                value_zh:value_zh
              };
          }

          $rootScope.text = that.text;
       }); 

       function setLang(lang) {

       }             
        /*
        console.log("data catalogs=");
        console.log(DataService.catalogs);
        this.catalogs = DataService.catalogs;
        this.orderProp = 'id';
        */
      }      
    ]
  });