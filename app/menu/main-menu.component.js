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

        RestfulApi.get("/api/pub/text")
        .success(function (response) {
          console.log("response from api text");

          console.log(response);
          console.log("end from api text");

          var i,item,id,name,value,value_zh;

          that.text = {};
          console.log(response.length);
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