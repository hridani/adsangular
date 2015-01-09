adsProject.directive('categories', function () {
    return {
        controller: 'CategoriesCtrl',
        restrict: "E",
        templateUrl: '../../templates/directives/categories.html',
        replace: true
    };
});
