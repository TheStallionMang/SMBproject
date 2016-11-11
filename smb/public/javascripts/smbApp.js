var app= angular.module('smbApp', ['ngRoute']).run(function($http, $rootScope) {
	$rootScope.authenticated = false;
	$rootScope.current_user = '';

	$rootScope.signout = function() {
		$http.get('auth/signout');
		$rootScope.authenticated = false;
		$rootScope.current_user = '';
	};
});

app.config(function($routeProvider) {
	$routeProvider
	// Loading partials

	// Homepage
	.when('/', {
		templateUrl: 'home.html',
		controller: 'mainController'
	})
	// List of Vendor Orders
	.when('/orders', {
		templateUrl: 'vendorOrder.html',
		controller: 'mainController'
	})

	// Inventory Table
	.when('/inv', {
		templateUrl: 'inventory.html',
		controller: 'mainController'
	})

	// Contact Page from home page(***Footer on every page?***)
	.when('/cont', {
		templateUrl: 'contact.html',
		controller: 'mainController'
	})

	// Form to add an item to the Inventory
	.when('/add-inv', {
		templateUrl: 'addInv.html',
		controller: 'mainController'
	})

	// Login form
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'authController'
	})

	// Register an account form
	.when('/register', {
		templateUrl: 'register.html',
		controller: 'authController'
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

app.controller('authController', function($scope, $http, $rootScope, $location) {
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function() {
		$http.post('/auth/login', $scope.user).success(function(data) {
			if(data.state == 'success') {
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.username;
				$location.path('/');
			} else {
				$scope.error_message = data.message;
			}
		});
	};

	$scope.register = function() {
		$http.post('/auth/signup', $scope.user).success(function(data) {
			if(data.state == 'success') {
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.username;
				$location.path('/');
			} else {
				$scope.error_message = data.message;
			}
		});
	};
});