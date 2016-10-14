var app= angular.module('smbApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'home.html',
		controller: 'mainController'
	})

	.when('/orders', {
		templateUrl: 'vendororder.html',
		controller: 'mainController'
	})

	.when('/cont', {
		templateUrl: 'contact.html',
		controller: 'mainController'
	})

	.when('/inv', {
		templateUrl: 'inventory.html',
		controller: 'mainController'
	})

	.when('/addinv', {
		templateUrl: 'addInv.html',
		controller: 'mainController'
	});
});

app.controller('mainController', function($scope) {
	$scope.items = [];
	$scope.newItem = {product_name: '', vendor_name: '', quantity: '', sell_price: '', created_at: ''};

	$scope.addInv = function() {
		$scope.newItem.created_at = Date.now();
		$scope.items.push($scope.newItem);
		$scope.newItem = {product_name: '', vendor_name: '', quantity: '', sell_price: '', created_at: ''};
	};
});