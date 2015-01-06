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
    function login(success,userName,password) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data:{username:userName, password:password}
            })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            });
    }
    function getCategoryAndTownWithPaging(categoryId,townId,numPage, success) {
        var url= 'http://softuni-ads.azurewebsites.net/api/ads?&pagesize=5&startpage=' + numPage;
        if(categoryId!=0){
            url=url+ '&categoryId=' + categoryId;
        }
        if(townId!=0){
            url=url+ '&townId=' + townId;
        }

        $http({method: 'GET', url: url})
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
        getAllCategories:getAllCategories,
        getCategoryAndTownWithPaging:getCategoryAndTownWithPaging,
        login:login
    }
});