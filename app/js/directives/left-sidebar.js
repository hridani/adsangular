
adsProject.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: "E",
        templateUrl: 'templates/left-sidebar.html',
        replace: true
    };
});