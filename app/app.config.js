/*
var ciciApp = angular.module( "ciciApp", ['ui.bootstrap'] );
ciciApp.controller( "CiciCtrl", [ '$scope', function($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
}]);
*/
'use strict';

app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<main-menu></main-menu><product-list></product-list>'
        }).
        when('/catalog/:catalogId', {
          template: '<main-menu></main-menu><catalog-detail></catalog-detail>'
        }).        
        when('/product/:productId', {
          template: '<main-menu></main-menu><product-detail></product-detail>'
        }).
        when('/menu', {
          template: '<main-menu></main-menu>'
        }).        
        otherwise('/products');
    }
  ]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'Healthy Food': 'healthy food food',
    'Snack': 'SnackSnack',
    'Agricultural Food': 'Agricultural_FoodAgricultural_Food',
    'Sea Food': 'Sea_Food',
    'Surround Natural': 'Surround Natural',
    'Search': 'Search',
    'Submit': 'Submit',
    'Sign Up': 'Sign Up',
    'Login': 'Login',
    'Home Page': 'Home',
    'Add to Cart': 'Add to Cart',
    'In Stock' : 'In Stock',
    'No Stock' : 'No Stock',    
    'fruit to go': 'fruit to go',
    'price of fruit to go': '$45',
    'Soft candy': 'Soft candy',
    'description of fruit to go': 'The name says it best:  it\'s fruit…. to go. 100% fruit, with no added sugar, no preservatives, nothing artificial, and nut and gluten free. Quick and convenient… it\'s the easy way to get an extra serving of fruit into your day. Stuff it in your bag or in the kids\' lunch and you\'re good to go. Plus, Fruit to go® now has a cool new shape that makes fruit snacks more fun.'
  });
 
  $translateProvider.translations('zh', {
    'Healthy Food': '保健品',
    'Snack': '零食',
    'Agricultural Food': '农产品',
    'Sea Food': '海产品',
    'Surround Natural': '唯天然',
    'Search': '搜索',
    'Submit': '提交',    
    'Sign Up': '注册',
    'Login': '登录',    
    'Home Page': '主页',
    'Add to Cart': '添加到购物车',
    'In Stock' : '有库存',
    'No Stock' : '无库存',
    'fruit to go': '水果条',
    'Soft candy': '软糖',
    'price of fruit to go': '218元',
    'description of fruit to go': '零食推荐自然不会少我娃最爱吃的水果果条--fruit to go，酸酸甜甜的味道小孩最爱，关键是100%的纯天然水果，无添加任何糖、化学颜料和防腐剂'
  });
 
  $translateProvider.preferredLanguage('zh');
}]);