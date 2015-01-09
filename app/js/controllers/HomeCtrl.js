adsProject.controller('HomeCtrl', ['$scope','$route', 'authentication','adsParams', function ($scope,$route, authentication,adsParams) {

    $scope.pageTitle = 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.number=0;
       if ($scope.isLoggedIn)
        $scope.username = authentication.getUser().username;
    $scope.logout=function (){
        $scope.number++;
        console.log($scope.number);

    }
}]);
