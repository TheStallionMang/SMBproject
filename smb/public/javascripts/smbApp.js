
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

  	// $rootScope.loggedIn();
	
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
		controller: 'accController'
	})

	// Form to add access
	.when('/acc-add', {
		templateUrl: 'acc-add.html',
		controller: 'accController'
	})


	/*	
		*** CATEGORIES ***
	*/

	// List of Categories
	.when('/cat', {
		templateUrl: 'cat.html',
		controller: 'catController'
	})
	
	// Detailed information about a category
	.when('/cat-detail', {
		templateUrl: 'cat-detail.html',
		controller: 'catController'
	})

	// Form to add a category
	.when('/cat-add', {
		templateUrl: 'cat-add.html',
		controller: 'catController'
	})

	/*	
		*** CUSTOMERS ***
	*/

	// List of Categories
	.when('/cust', {
		templateUrl: 'cust.html',
		controller: 'custController'
	})
	
	// Detailed information about a customer
	.when('/cust-detail', {
		templateUrl: 'cust-detail.html',
		controller: 'custController'
	})

	// Form to add a customer
	.when('/cust-add', {
		templateUrl: 'cust-add.html',
		controller: 'custController'
	})

	/*	
		*** EMPLOYEES ***
	*/

	// List of Employees
	.when('/emp', {
		templateUrl: 'emp.html',
		controller: 'empController'
	})
	
	// Detailed information about an employee
	.when('/emp-detail', {
		templateUrl: 'emp-detail.html',
		controller: 'empController'
	})

	// Form to add an employee
	.when('/emp-add', {
		templateUrl: 'emp-add.html',
		controller: 'empController'
	})

	/*	
		*** INVENTORY ***
	*/

	// Inventory Table
	.when('/inv', {
		templateUrl: 'inv.html',
		controller: 'invController'
	})
	
	// Detailed information about an item
	.when('/inv-detail', {
		templateUrl: 'inv-detail.html',
		controller: 'invController'
	})

	// Form to add an item to the Inventory
	.when('/inv-add', {
		templateUrl: 'inv-add.html',
		controller: 'invController'
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
		controller: 'orderController'
	})

	// Detailed information about an order
	.when('/order-detail', {
		templateUrl: 'order-detail.html',
		controller: 'orderController'
	})

	// Form to place an order
	.when('/order-add', {
		templateUrl: 'order-add.html',
		controller: 'orderController'
	})

	/*	
		*** TRANSACTIONS ***
	*/

	// List of Transactions
	.when('/trans', {
		templateUrl: 'trans.html',
		controller: 'transController'
	})
	
	// Detailed information about a transaction
	.when('/trans-detail', {
		templateUrl: 'trans-detail.html',
		controller: 'transController'
	})

	// Form to add a transaction
	.when('/trans-add', {
		templateUrl: 'trans-add.html',
		controller: 'transController'
	})

	/*	
		*** USERS ***
	*/

	// List of users
	.when('/user', {
		templateUrl: 'user.html',
		controller: 'userController'
	})
	
	// Detailed information about a user
	.when('/user-detail', {
		templateUrl: 'user-detail.html',
		controller: 'userController'
	})

	.when('/middleman', {
		templateUrl: 'middleman.html',
		controller: 'userController'
	})

	/*	
		*** VENDORS ***
	*/

	// List of Vendors
	.when('/vend', {
		templateUrl: 'vend.html',
		controller: 'vendController'
	})
	
	// Detailed information about a vendor
	.when('/vend-detail', {
		templateUrl: 'vend-detail.html',
		controller: 'vendController'
	})

	// Form to add a vendor
	.when('/vend-add', {
		templateUrl: 'vend-add.html',
		controller: 'vendController'
	});

});

// Authentication Controller

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

app.factory('subFactory', function($resource) {
	return $resource('/sub/:id');
});

// Access Controller
app.factory('accFactory', function($resource) {
	return $resource('/acc/:id');
});

app.controller('accController', function(accFactory, subFactory, $scope, $rootScope, $location) {
	$scope.access = accFactory.query();
	$scope.subs = subFactory.query();
	$scope.newAcc = {username: '', subsystem: '', create: '', read: '', update: '', delete: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addAcc = function() {
		$scope.newAcc.created_at = Date.now();
		$scope.newAcc.created_by = $rootScope.current_user;
		accFactory.save($scope.newAcc, function() {
			$scope.access = accFactory.query();
			$scope.newAcc = {username: '', subsystem: '', create: '', read: '', update: '', delete: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/acc');
		});
	};
});


// Category Controller
app.factory('catFactory', function($resource) {
	return $resource('/cat/:id');
});

app.controller('catController', function(catFactory, $scope, $rootScope, $location) {
	$scope.categories = catFactory.query();
	$scope.newCat = {name: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addCat = function() {
		$scope.newCat.created_at = Date.now();
		$scope.newCat.created_by = $rootScope.current_user;
		catFactory.save($scope.newCat, function() {
			$scope.categories = catFactory.query();
			$scope.newCat = {name: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/cat');
		});
	};
});


// Customer Controller
app.factory('custFactory', function($resource) {
	return $resource('/cust/:id');
});

app.controller('custController', function(custFactory, $scope, $rootScope, $location) {
	$scope.customers = custFactory.query();
	$scope.newCust = {firstname: '', lastname: '', street: '', city: '', state: '', payment: '', phone: '', email: '', card: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addCust = function() {
		$scope.newCust.created_at = Date.now();
		$scope.newCust.created_by = $rootScope.current_user;
		custFactory.save($scope.newCust, function() {
			$scope.customers = custFactory.query();
			$scope.newCust = {firstname: '', lastname: '', street: '', city: '', state: '', payment: '', phone: '', email: '', card: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/cust');
		});
	};
});


// Employee Controller
app.factory('empFactory', function($resource) {
	return $resource('/emp/:id');
});

app.controller('empController', function(empFactory, jobFactory, $scope, $rootScope, $location) {
	$scope.employees = empFactory.query();
	$scope.positions = jobFactory.query();
	$scope.newEmp = {ssn: '', firstname: '', lastname: '', position: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addEmp = function() {
		$scope.newEmp.created_at = Date.now();
		$scope.newEmp.created_by = $rootScope.current_user;
		empFactory.save($scope.newEmp, function() {
			$scope.employees = empFactory.query();
			$scope.newEmp = {ssn: '', firstname: '', lastname: '', position: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/emp');
		});
	};
});


// Inventory Controller
app.factory('invFactory', function($resource) {
	return $resource('/inv/:id');
});

app.controller('invController', function(invFactory, orderFactory, catFactory, $scope, $rootScope, $location) {
	$scope.items = invFactory.query();
	$scope.orders = orderFactory.query();
	$scope.categories = catFactory.query();
	$scope.newItem = {name: '', condition: '', price: '', category: '', orderNum: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addInv = function() {
		$scope.newItem.created_at = Date.now();
		$scope.newItem.created_by = $rootScope.current_user;
		invFactory.save($scope.newItem, function() {
			$scope.items = invFactory.query();
			$scope.newItem = {name: '', condition: '', price: '', category: '', orderNum: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/inv');
		});
	};
});

// Job Controller
app.factory('jobFactory', function($resource) {
	return $resource('/job/:id');
});

app.controller('jobController', function(jobFactory, $scope, $rootScope, $location) {
	$scope.jobs = jobFactory.query();
	$scope.newJob = {title: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addJob = function() {
		$scope.newJob.created_at = Date.now();
		$scope.newJob.created_by = $rootScope.current_user;
		jobFactory.save($scope.newJob, function() {
			$scope.jobs = jobFactory.query();
			$scope.newJob = {title: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/job');
		});
	};
});

// Order Controller
app.factory('orderFactory', function($resource) {
	return $resource('/order/:id');
});

app.controller('orderController', function(orderFactory, vendFactory, $scope, $rootScope, $location) {
	$scope.orders = orderFactory.query();
	$scope.vendors = vendFactory.query();
	$scope.newOrder = {vendor: '', item: '', street: '', city: '', state: '', shipping: '', receipt: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
	
	$scope.addOrder = function() {
		$scope.newOrder.created_at = Date.now();
		$scope.newOrder.created_by = $rootScope.current_user;
		orderFactory.save($scope.newOrder, function() {
			$scope.orders = orderFactory.query();
			$scope.newOrder = {vendor: '', item: '', street: '', city: '', state: '', shipping: '', receipt: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/order');
		});
	};
});


// Transaction Controller
app.factory('transFactory', function($resource) {
	return $resource('/trans/:id');
});

app.controller('transController', function(transFactory, $scope, $rootScope, $location) {
	$scope.transactions = transFactory.query();
	$scope.newTrans = {transType: '', status: '', shipType: '', total: '', delivStatus: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addTrans = function() {
		$scope.newTrans.created_at = Date.now();
		$scope.newTrans.created_by = $rootScope.current_user;
		transFactory.save($scope.newTrans, function() {
			$scope.transactions = transFactory.query();
			$scope.newTrans = {transType: '', status: '', shipType: '', total: '', delivStatus: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/trans');
		});
	};
});


// User Controller... IS THIS NEEDED??? Only need to update a user...
// registration handles creation?
app.factory('userFactory', function($resource) {
	return $resource('/user/:id');
});

app.controller('userController', function(userFactory, $scope, $rootScope, $location, $http) {
	$scope.users = userFactory.query();
	$scope.newUser = {firstname: '', lastname: ''};

	$scope.checkEmp = function() { /*
		userFactory.save($scope.newUser, function() {
			$scope.newUser = {firstname: '', lastname: ''};
			$location.path('/register');
		});*/
		$location.path('/register');
	};
});


// Vendor Controller
app.factory('vendFactory', function($resource) {
	return $resource('/vend/:id');
});

app.controller('vendController', function(vendFactory, $scope, $rootScope, $location) {
	$scope.vendors = vendFactory.query();
	$scope.newVendor = {name: '', street: '', city: '', state: '', status: '', website: '', comments: '', email: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};

	$scope.addVend = function() {
		$scope.newVendor.created_at = Date.now();
		$scope.newVendor.created_by = $rootScope.current_user;
		vendFactory.save($scope.newVendor, function() {
			$scope.vendors = vendFactory.query();
			$scope.newVendor = {name: '', street: '', city: '', state: '', status: '', website: '', comments: '', email: '', created_by: '', created_at: '', updated_by: '', updated_at: ''};
			$location.path('/vend');
		});
	};
});
