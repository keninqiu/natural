angular.
  module('DataService')
  .factory('DataService', function(RestfulApi) {
  	RestfulApi.get("/api/pub/catalogs")
  	.success(function (response) {
   		console.log(response);
   });
  return {
      products : 
		[
		    {
		        "id": 1, 
		        "catalog_id": [1,2],
		        "sequence": 1,
		        "imageUrl": "img/product/1.jpg", 
		        "name": "fruit to go", 
		        "keyword": ["fruit"],     
		        "description": "description of fruit to go",
		        "price" : "price of fruit to go",
		        "stock" : 1
		    }, 
		    {
		        "id": 2, 
		        "catalog_id": [1,2],
		        "sequence": 2,
		        "imageUrl": "img/product/1.jpg", 
		        "name": "Soft candy", 
		        "keyword": ["soft","candy"],
		        "description": "description of Soft candy",
		        "price" : "price of Soft candy",
		        "stock" : 1
		    },    
		    {
		        "id": 3, 
		        "catalog_id": [1,2],
		        "sequence": 2,
		        "imageUrl": "img/product/1.jpg", 
		        "name": "Soft candy", 
		        "keyword": ["soft","candy"],
		        "description": "description of Soft candy",
		        "price" : "price of Soft candy",
		        "stock" : 1
		    },    
		]      
      ,
      catalogs: 
		[
			{
				"id" : 1,
				"parent_id": 0,
				"name" : "Healthy Food"
			},
			{
				"id" : 2,
				"parent_id": 0,
				"name" : "Snack"
			},
			{
				"id" : 3,
				"parent_id": 0,
				"name" : "Agricultural Food"
			},	
			{
				"id" : 4,
				"parent_id": 0,
				"name" : "Sea Food"
			}	
		]      
  };
});