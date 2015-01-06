'use strict';
var adsProject = angular.module('adsProject', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'AdsController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/ads', {
            templateUrl: 'templates/all-ads.html',
            controller: 'PaginationCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/ads'});
    });

