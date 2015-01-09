
adsProject.directive('loggedInSidebar', function () {
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: "E",
        templateUrl: 'templates/directives/user-in-sidebar.html',
        replace: true
    };
});
