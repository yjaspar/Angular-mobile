'use strict';

angularjsTestApp.controller('MainCtrl', function($scope, $location) {
	$scope.subscribe = function(){
		$location.path('/subscribe');
	}

	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Testacular'
	];
});

function createProfile(data){
	alert(data);
}

angularjsTestApp.controller('SubscribeCtrl', function($scope, $location, $http) {

	$scope.relocate = function(){
		$location.path('/');
	}

	$scope.createAccount = function(){
		$http({url: 'http://demo:VlddlAOA@api.staging.openask.com/categories?callback=createProfile', method: 'JSONP', withCredentials: false}).
		success(function(data, status, headers, config) {
			alert('Success: '+data+" - "+status);
		}).
		error(function(data, status, headers, config) {
			alert('Error: '+data+" - "+status);
		});
	}
});