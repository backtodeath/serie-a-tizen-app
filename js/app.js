'use strict';

var app = angular.module('serieAApp', ['mobile-angular-ui', 'mobile-angular-ui.gestures', 'ngRoute', 'ngStorage']);

app.run(function($transform) {
	window.$transform = $transform;
});

app.config(function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
});