angular.module('BirdApp', ['ngRoute','RouteControllers', 'UserService']);


angular.module('BirdApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider

    .when("/", {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	}).
      when("/about", {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	}).
      when("/media", {
		templateUrl: 'templates/media.html',
		controller: 'MediaController'
	}).
      when("/events", {
		templateUrl: 'templates/events.html',
		controller: 'EventsController'
	}).
      when("/contact", {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	}).
      when("/newsletter/register", {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})

});