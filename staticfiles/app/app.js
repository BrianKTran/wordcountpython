var app = angular.module('firstApp',["ngRoute","myhomemainCtrl","myhomeservice"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "../views/main.html",
		controller: "mainCtrl"

	})
	.otherwise({
		templateUrl:"../views/main.html",
		controller:"mainCtrl"
	})

})

