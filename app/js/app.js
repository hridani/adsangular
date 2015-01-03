var adsProject = angular.module('adsProject', ['ngRoute','ui.bootstrap'])
        .config(function ($routeProvider) {
            $routeProvider.when('/register', {
                templateUrl: 'templates/register.html',
                controler: 'AdsController'
            });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controler: 'AdsController'
        });
            $routeProvider.when('/ads', {
                templateUrl: 'templates/all-ads.html',
                controler: 'AdsController'
            });
        $routeProvider.otherwise({redirectTo: '/ads'});
        });

