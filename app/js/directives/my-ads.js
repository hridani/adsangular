adsProject.directive('myAds', function () {
    return {
        controller: 'MyAdsCtrl',
        restrict: "E",
        templateUrl: 'templates/my-ads.html',
        replace: true
    };
});
