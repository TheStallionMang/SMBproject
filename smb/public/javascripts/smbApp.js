var app= angular.module('smbApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	// Loading partials

	// Homepage
	.when('/', {
		templateUrl: 'home.html',
		controller: 'mainController'
	})
	// Vendor Orders
	.when('/orders', {
		templateUrl: 'vendorOrder.html',
		controller: 'mainController'
	})

	// Inventory
	.when('/inv', {
		templateUrl: 'inventory.html',
		controller: 'mainController'
	})

	// Contact Page from home page(***Footer on every page?***)
	.when('/cont', {
		templateUrl: 'contact.html',
		controller: 'mainController'
	})

	// Add an Item to the Inventory
	.when('/add-inv', {
		templateUrl: 'addInv.html',
		controller: 'mainController'
	})

	// Login
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'mainController'
	})

	// Register
	.when('/register', {
		templateUrl: 'register.html',
		controller: 'mainController'
	})

	// Dashboard
	.when('/dash', {
		templateUrl: 'dashboard.html',
		controller: 'mainController'
	})

	// Place an Order
	.when('/order-form', {
		templateUrl: 'orderForm.html',
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