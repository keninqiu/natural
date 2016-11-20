angular.
  module('catalogDetail').
  component('catalogDetail', {
    templateUrl: 'catalog-detail/catalog-detail.template.html',
    controller: ['DataService', '$routeParams',
      function ProductDetailController(DataService, $routeParams) {
        catalogs = DataService.catalogs;
        var catalog = [];
        angular.forEach(catalogs, function(value, key) {
          if(value.id == $routeParams.catalogId) {
            this.push(value);
          }
          
        }, catalog);  
        if(catalog) {
          catalog = catalog[0];
          this.catalog = catalog;
        }

        console.log(this.catalog);

        products = DataService.products;
        var productsOfCatalog = [];
        angular.forEach(products, function(value, key) {
          if(value.catalog_id.indexOf(catalog.id) >= 0) {
            this.push(value);
            //this.push(key + ': ' + value);
          }
          
        }, productsOfCatalog);  
        this.products = productsOfCatalog;
        console.log(this.products);            
      }
    ]

  });