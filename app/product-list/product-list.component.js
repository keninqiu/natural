'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['DataService','$rootScope','RestfulApi',
      function ProductListController(DataService,$rootScope,RestfulApi) {
        var that = this;
        $rootScope.$watch('text',function(newValue, oldValue) {
          that.text = newValue;
        });
        $rootScope.$watch('lang',function(newValue, oldValue) {
          that.lang = newValue;
        });
        RestfulApi.get("/api/pub/products")
        .success(function (response) {
          that.products = response;
          console.log('that.products');
          console.log(that.products);
       });   
      }
    ]
  });