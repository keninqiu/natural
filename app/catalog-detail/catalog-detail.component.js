angular.
  module('catalogDetail').
  component('catalogDetail', {
    templateUrl: 'catalog-detail/catalog-detail.template.html',
    controller: ['RestfulApi','DataService', '$routeParams','$rootScope',
      function CatalogDetailController(RestfulApi,DataService, $routeParams,$rootScope) {
        console.log("hahahehe");
        var catalogId = $routeParams.catalogId;
        var that = this;

        $rootScope.$watch('lang',function(newValue, oldValue) {
          that.lang = newValue;
        });
        RestfulApi.get("/api/pub/catalogproduct/index?id="+catalogId)
        .success(function (response) {
          that.products = response.products;
          that.catalog = response.catalog;
       });            
      }
    ]

  });