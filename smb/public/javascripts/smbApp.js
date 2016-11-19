
var app = angular.module('smbApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http, $location) {
	$rootScope.loggedIn = function() {
    	$http.post('/auth/isloggedIn').success(function(data) {
      	if(data.state == 'success') {
        	$rootScope.authenticated = true;
        	$rootScope.current_user = data.user.USERNAME;
        	$location.path('/');
      	}
      	else {
        	$rootScope.authenticated = false;
        	$rootScope.current_user = '';
        	$location.path('/');
      		}
    	});
  	};

  	$rootScope.loggedIn();
	
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

	/*	
		*** BASIC PAGES ***
	*/

	// Homepage
	.when('/', {
		templateUrl: 'home.html',
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

	// Contact Page
	.when('/cont', {
		templateUrl: 'contact.html',
		controller: 'mainController'
	})

	/*	
		*** ACCESS ***
	*/

	// List of access
	.when('/acc', {
		templateUrl: 'acc.html',
		controller: 'mainController'
	})
	
	// Detailed information about access
	.when('/acc-detail', {
		templateUrl: 'invItemDetail.html',
		controller: 'mainController'
	})

	// Form to add access
	.when('/acc-add', {
		templateUrl: 'acc-add.html',
		controller: 'mainController'
	})


	/*	
		*** CATEGORIES ***
	*/

	// List of Categories
	.when('/cat', {
		templateUrl: 'cat.html',
		controller: 'mainController'
	})
	
	// Detailed information about a category
	.when('/cat-detail', {
		templateUrl: 'cat-detail.html',
		controller: 'mainController'
	})

	// Form to add a category
	.when('/cat-add', {
		templateUrl: 'cat-add.html',
		controller: 'mainController'
	})

	/*	
		*** CUSTOMERS ***
	*/

	// List of Categories
	.when('/cust', {
		templateUrl: 'cust.html',
		controller: 'mainController'
	})
	
	// Detailed information about a customer
	.when('/cust-detail', {
		templateUrl: 'cust-detail.html',
		controller: 'mainController'
	})

	// Form to add a customer
	.when('/cust-add', {
		templateUrl: 'cust-add.html',
		controller: 'mainController'
	})

	/*	
		*** EMPLOYEES ***
	*/

	// List of Employees
	.when('/emp', {
		templateUrl: 'emp.html',
		controller: 'mainController'
	})
	
	// Detailed information about an employee
	.when('/emp-detail', {
		templateUrl: 'emp-detail.html',
		controller: 'mainController'
	})

	// Form to add an employee
	.when('/emp-add', {
		templateUrl: 'emp-add.html',
		controller: 'mainController'
	})

	/*	
		*** INVENTORY ***
	*/

	// Inventory Table
	.when('/inv', {
		templateUrl: 'inv.html',
		controller: 'mainController'
	})
	
	// Detailed information about an item
	.when('/inv-detail', {
		templateUrl: 'inv-detail.html',
		controller: 'mainController'
	})

	// Form to add an item to the Inventory
	.when('/inv-add', {
		templateUrl: 'inv-add.html',
		controller: 'mainController'
	})

	/*	
		*** JOBS ***
	*/

	// List of jobs
	.when('/job', {
		templateUrl: 'job.html',
		controller: 'jobController'
	})
	
	// Detailed information about a job
	.when('/job-detail', {
		templateUrl: 'job-detail.html',
		controller: 'jobController'
	})

	// Form to add a job
	.when('/job-add', {
		templateUrl: 'job-add.html',
		controller: 'jobController'
	})

	/*	
		*** ORDERS ***
	*/

	// Orders table
	.when('/order', {
		templateUrl: 'order.html',
		controller: 'mainController'
	})

	// Detailed information about an order
	.when('/order-detail', {
		templateUrl: 'order-detail.html',
		controller: 'mainController'
	})

	// Form to place an order
	.when('/order-add', {
		templateUrl: 'order-add.html',
		controller: 'mainController'
	})

	/*	
		*** TRANSACTIONS ***
	*/

	// List of Transactions
	.when('/trans', {
		templateUrl: 'trans.html',
		controller: 'mainController'
	})
	
	// Detailed information about a transaction
	.when('/trans-detail', {
		templateUrl: 'trans-detail.html',
		controller: 'mainController'
	})

	// Form to add a transaction
	.when('/trans-add', {
		templateUrl: 'trans-add.html',
		controller: 'mainController'
	})

	/*	
		*** USERS ***
	*/

	// List of users
	.when('/user', {
		templateUrl: 'user.html',
		controller: 'mainController'
	})
	
	// Detailed information about a user
	.when('/user-detail', {
		templateUrl: 'user-detail.html',
		controller: 'mainController'
	})

	// Form to add a user
	.when('/user-add', {
		templateUrl: 'user-add.html',
		controller: 'mainController'
	})

	/*	
		*** VENDORS ***
	*/

	// List of Vendors
	.when('/vend', {
		templateUrl: 'vend.html',
		controller: 'mainController'
	})
	
	// Detailed information about a vendor
	.when('/vend-detail', {
		templateUrl: 'vend-detail.html',
		controller: 'mainController'
	})

	// Form to add a vendor
	.when('/vend-add', {
		templateUrl: 'vend-add.html',
		controller: 'mainController'
	});

});

app.controller('mainController', function($scope, $rootScope) {
	$scope.addInvItem = function() {
		
	}
});

app.controller('authController', function($scope, $http, $rootScope, $location) {
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function() {
		$http.post('/auth/login', $scope.user).success(function(data) {
			if(data.state == 'success') {
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.USERNAME;
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
				$rootScope.current_user = data.user.USERNAME;
				$location.path('/');
			} else {
				$scope.error_message = data.message;
			}
		});
	};
});

app.factory('jobFactory', function($http) {
	var factory = {};
	factory.getAll = function() {
		return $http.get('/job');
	}
	return factory;
});

app.controller('jobController', function($scope, jobFactory) {
	$scope.jobs = [];
	$scope.newJob = {title: '', created_by: ''};

	jobFactory.getAll().success(function(data) {
		$scope.jobs = data;
	});

	$scope.addJob = function() {
		$scope.newJob.created_by = $rootScope.current_user;

		$http.post('/job', $scope.newJob).success(function(data) {
			$location.path('/job');
		});
	};
});