adsProject.controller('HomeCtrl', ['$scope', 'authentication', function ($scope, authentication) {
    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();
    if ($scope.isLoggedIn)
        $scope.username = authentication.getUser().username;
}]);
