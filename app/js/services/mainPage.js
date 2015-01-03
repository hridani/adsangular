/**
 * Created by user on 2.1.2015 г..
 */
adsProject.factory('mainData', function ($http, $log) {

    function getAllAds(success) {
        $http({methos: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=1'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }

    function getAllTowns(success) {
        $http({methos: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }
    function getAllCategories(success) {
        $http({methos: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }

    return {
        getAllAds: getAllAds,
        getAllTowns:getAllTowns,
        getAllCategories:getAllCategories
    }
})