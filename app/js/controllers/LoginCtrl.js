'use strict';
adsProject.controller('LoginCtrl',['$scope','$rootScope','$location','notifyService','userData', function($scope,$rootScope,$location,notifyService,userData) {
    $rootScope.pageTitle = "Login";
    $scope.login = function (user) {
       userData.login(user)
           .$promise
           .then(function(data){
               $location.path('/');
           },function error(err) {
               notifyService.showError("Invalid login", err.data);
           })
    };

    $scope.cancelUser = function () {
        $location.path('/')
    }
}]);
