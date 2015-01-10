adsProject.directive('myAdsSidebar', function () {
    return {
        controller: 'MyAdsCtrl',
        restrict: "E",
        templateUrl: 'templates/directives/my-ads-sidebar.html',
        replace: true
    };
});
