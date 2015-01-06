adsProject.controller('LoginCtrl',['$scope', function($scope, $location,mainData) {

   $scope.loginUser = function (login,loginForm) {
        mainData.login(function (resp) {
            $scope.access_token = resp;
        },login.username,login.password);

    };

    $scope.cancelUser = function () {

    }
}]);
