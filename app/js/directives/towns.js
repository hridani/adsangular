adsProject.directive('towns', function () {
    return {
        controller: 'TownsCtrl',
        restrict: "E",
        templateUrl: 'templates/towns.html',
        replace: true
    };
});
