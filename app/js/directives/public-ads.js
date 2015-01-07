adsProject.directive('publicAds', function () {
    return {
        controller: 'PublicAdsCtrl',
        restrict: "E",
        templateUrl: 'templates/public-ads.html',
        replace: true
    };
});
