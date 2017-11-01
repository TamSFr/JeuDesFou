'use strict';

var app = angular.module("myApp", []);

app.controller('choix', 
	function($scope) 
	{
		$scope.question = "Ca va ?";
		$scope.aff = function(n) {
			$scope.question = n;
		};
	}
);
