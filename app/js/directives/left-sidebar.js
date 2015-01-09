
adsProject.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: "E",
        templateUrl: '../../templates/directives/anonymous-left-sidebar.html',
        replace: true
    };
});