adsProject.directive('headerads', function () {
    return {
        controller: 'HomeCtrl',
        restrict: "E",
        templateUrl: 'templates/partial/header.html',
        replace: true
    };
});
