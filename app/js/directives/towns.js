adsProject.directive('towns', function () {
    return {
        controller: 'TownsCtrl',
        restrict: "E",
        templateUrl: '../../templates/directives/towns.html',
        replace: true
    };
});
