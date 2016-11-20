'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['DataService',
      function ProductListController(DataService) {
        this.products = DataService.products;
        this.orderProp = 'id';
      }
    ]
  });