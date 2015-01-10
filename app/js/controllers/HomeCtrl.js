'use strict';
adsProject.controller('HomeCtrl', ['$scope','$rootScope','$route','$location','notifyService' ,'authentication','userData',
    function ($scope,$rootScope,$route,$location,notifyService, authentication,userData) {
    $rootScope.pageTitle = 'Home';
    $rootScope.isLoggedIn = authentication.isLoggedIn();
    if ($rootScope.isLoggedIn)
        $rootScope.username = authentication.getUser().username;
    $scope.logout = function () {
        userData.logout();
        notifyService.showInfo("Logout successful");
        $location.path('/');
        $route.reload();
    }
}]);
