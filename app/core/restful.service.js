angular.
  module('RestfulApi')
  .service("RestfulApi", function($http){
  var domain = "http://natural";
  var jwt = "";
  this.get = function(url){

      return $http({
            url: domain + url,
            method: "GET",
            headers: {'XWEBASSURE-API-TOKEN': jwt, 'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response){
          console.log(response);
          return response;
        }).error(function (response) {
          console.log(response);
          return response;          
        });

  }

  this.post = function(url,data) {
      return $http({
            url: url,
            method: "POST",
            headers: {'XWEBASSURE-API-TOKEN': jwt, 'Content-Type': 'application/x-www-form-urlencoded'},
            data:data
        }).success(function(response){
          console.log(response);
          return response;
        }).error(function (response) {
          console.log(response);
          return response;          
        });
  }

});