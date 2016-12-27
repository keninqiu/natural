angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$rootScope', '$routeParams','RestfulApi',
      function ProductDetailController($rootScope, $routeParams,RestfulApi) {
        var productId = $routeParams.productId;
        console.log('productId='+productId);
        var that = this;

        $rootScope.$watch('text',function(newValue, oldValue) {
          that.text = newValue;
        });

        $rootScope.$watch('lang',function(newValue, oldValue) {
          that.lang = newValue;
        });

        RestfulApi.get("/api/pub/product/index?id="+productId)
        .success(function (response) {
          that.product = response;
          console.log(that.product.name);
       });   
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