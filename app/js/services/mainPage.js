/**
 * Created by user on 2.1.2015 г..
 */
adsProject.factory('mainData', function ($http, $log) {

    function getAllAds(success) {
        $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=5&startpage=1'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }

    function getAllAdsWithPaging(numPage, success) {
        $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=5&startpage='+numPage})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }

    function getAllTowns(success) {
        $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }
    function getAllCategories(success) {
        $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }

    return {
        getAllAds: getAllAds,
        getAllAdsWithPaging:getAllAdsWithPaging,
        getAllTowns:getAllTowns,
        getAllCategories:getAllCategories
    }
})