adsProject.controller('HomeCtrl', ['$scope','$route','$location','notifyService' ,'authentication','userData', function ($scope,$route,$location,notifyService, authentication,userData) {

    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();
    if ($scope.isLoggedIn)
        $scope.username = authentication.getUser().username;
    $scope.logout = function () {
        userData.logout();
        notifyService.showInfo("Logout successful");
        $location.path('/');
        $route.reload();

    }


}]);
