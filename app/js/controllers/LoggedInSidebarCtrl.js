adsProject.controller('LoggedInSidebarCtrl', ['$scope','$route', 'userData','notifyService', function ($scope,$route, userData,notifyService) {
    $scope.logout = function () {
        userData.logout();
        notifyService.showInfo("Logout successful");
        $route.reload();

    }
}]);
