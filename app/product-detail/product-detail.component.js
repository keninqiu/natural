angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['DataService', '$routeParams',
      function ProductDetailController(DataService, $routeParams) {
        products = DataService.products;
        console.log("products=");
        console.log(products);
        var product = [];
        angular.forEach(products, function(value, key) {
          if(value.id == $routeParams.productId) {
            this.push(value);
            //this.push(key + ': ' + value);
          }
          
        }, product);  
        if(product) {
          this.product = product[0];
        }
        console.log(this.product);     
      }
    ]
    /*
    controller: ['$http', '$routeParams',
      function ProductDetailController($http, $routeParams) {
        var self = this;

        $http.get('data/product.json').then(function(response) {
        	products = response.data;
        	var product = [];
			angular.forEach(products, function(value, key) {
				if(value.id == $routeParams.productId) {
					this.push(value);
					//this.push(key + ': ' + value);
				}
			  
			}, product);  
			if(product) {
				self.product = product[0];
			} 
			console.log(self.product);     	
        	//console.log(response);
          //self.phone = response.data;
        });
      }
    ]
    */
  });