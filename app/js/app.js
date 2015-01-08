'use strict';
var adsProject = angular.module('adsProject', ['ngRoute', 'ngResource', 'ui.bootstrap']);
 //adsProject.constant('baseServiceUrl','http://softuni-ads.azurewebsites.net/api/');
 adsProject.constant('baseServiceUrl', 'http://localhost:1337/api/');
adsProject.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/publish-new-ad.html',
        controller: 'PublishNewAdCtrl'
    });
    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

