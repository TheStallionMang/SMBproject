var app = angular.module('SMBapp', []);

app.controller('mainController', function($scope) {
	$scope.items = [];
	$scope.newItem = {product_name: '', vendor_name: '', quantity: '', sell_price: '', created_at: ''};
	
	$scope.addInv = function() {
		$scope.newItem.created_at = Date.now();
		$scope.items.push($scope.newItem);
		$scope.newItem = {product_name: '', vendor_name: '', quantity: '', sell_price: '', created_at: ''};
	};
});