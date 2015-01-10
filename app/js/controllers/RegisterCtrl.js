'use strict';
adsProject.controller('RegisterCtrl', ['$scope','$rootScope', '$location', 'notifyService','townsData', 'userData', function ($scope,$rootScope, $location,notifyService, townsData, userData) {
    $rootScope.pageTitle = "Register";
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user)
            .$promise
            .then(function(data){
                notifyService.showInfo("User registered successfully.");
                $location.path("/");
            },function(err){
                notifyService.showError("User registration failed", err);
            }
        );
    };

    $scope.cancelRegister = function () {
        $location.path('/')
    }
}]);

