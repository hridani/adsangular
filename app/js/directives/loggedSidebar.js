
adsProject.directive('loggedInSidebar', function () {
    return {
        controller: 'HomeCtrl',
        restrict: "E",
        templateUrl: '../../templates/directives/user-in-sidebar.html',
        replace: true
    };
});
