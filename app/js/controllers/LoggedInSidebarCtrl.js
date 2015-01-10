'use strict';
adsProject.controller('LoggedInSidebarCtrl', ['$scope','$location', 'userData','notifyService', function ($scope,$location, userData,notifyService) {
    $scope.logout = function () {
        userData.logout();
        notifyService.showInfo("Logout successful");
        $location.path('/');
    }
}]);
