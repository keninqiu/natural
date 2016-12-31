'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['DataService','$rootScope','RestfulApi','$document',
      function ProductListController(DataService,$rootScope,RestfulApi,$document) {
        var that = this;

        $document.ready(function () {
          var aaa = $document.find('.materialboxed');
          console.log(aaa.length);
          //$document.getElementsByClassName(".materialboxed").materialbox();
        });

        $rootScope.$watch('text',function(newValue, oldValue) {
          that.text = newValue;
        });
        $rootScope.$watch('lang',function(newValue, oldValue) {
          that.lang = newValue;
        });
        RestfulApi.get("/api/pub/products")
        .success(function (response) {
          that.products = response;
          /*
          for (var i = 0; i < response.length; i++) { 

          }
          */
          /*
          that.products = response;

          that.products1 = [];
          that.products1.push(response[0]);
          that.products1.push(response[1]);
          that.products1.push(response[2]);

          that.products2 = [];
          that.products2.push(response[0]);
          that.products2.push(response[1]);
          that.products2.push(response[2]);
          console.log('that.products1=');
          console.log(that.products1);
          */
       });   
      }
    ]
  });