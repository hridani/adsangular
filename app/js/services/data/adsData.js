adsProject.factory('adsData', ['$resource','$http', 'baseServiceUrl', 'authentication',
    function ($resource,$http, baseServiceUrl, authentication) {
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    function getPublicAds(params) {
        return resource.get(params);
    }

    function editAd(adId, ad) {
        return resource.update({id: adId}, ad);
    }
    function deactivateAd(adId) {
        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] =userAuthentication;
        var resourceDeactivate = $resource(baseServiceUrl + 'user/ads/deactivate/:adId', {adId:'@id'}, {
            update: {method: 'PUT'}
        });
        return resourceDeactivate.update({id: adId});
    }
    function getAdById() {
        return resource.get({id: adId});
    }

    function createNewAd(ad) {
        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] =userAuthentication;
        var resourceNewAd= $resource(baseServiceUrl + 'user/ads');
        return resourceNewAd.save(ad);
    }

        function getMyAds(params){
            var userAuthentication = authentication.getHeaders().Authorization;
            $http.defaults.headers.common['Authorization'] =userAuthentication;
            var resourceMyAds= $resource(baseServiceUrl + 'user/ads');
            return resourceMyAds.get(params);
        }

    function deleteAd(idId) {
        return resource.delete({id: idId});
    }

    return {
        getPublicAds: getPublicAds,
        create: createNewAd,
        deactivateAd:deactivateAd,
        getMyAds:getMyAds,
        getById: getAdById,
        edit: editAd,
        delete: deleteAd
    }

}]);