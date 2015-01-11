'use strict';
adsProject.controller('EditUserCtrl', ['$scope','$location', 'userData','townsData','notifyService', function ($scope,$location,userData,townsData,notifyService) {
    getUserProfile();
    function getUserProfile() {
        userData.getUser()
            .$promise
            .then(function(data){
                $scope.towns = townsData.getTowns();
                $scope.user=data;

            },function error(err) {
                notifyService.showError("Invalid user", err.data);
            })
    }

    $scope.cancelUpdate = function () {
        $location.path('/user/ads');
    };

    $scope.updateUserProfile=function(user){
          userData.updateUser(user)
            .$promise
            .then(function(data){
                notifyService.showInfo("User profile successfully updated");

            },function error(err) {
                notifyService.showError("Invalid user", err.data);
            })
    };

    $scope.changePassword=function(passData){
        userData.changePassword(passData)
            .$promise
            .then(function(data){
                notifyService.showInfo("Change password successfully.");

            },function error(err) {
                notifyService.showError("Cannot change password", err.data);
            })
    }
}]);
