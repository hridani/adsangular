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

    function getAdById() {
        return resource.get({id: adId});
    }

    function createNewAd(ad) {
        $http.defaults.headers.common['Authorization'] = 'Bearer BOVo-pAkr2z5R1qut5Twbo9HfrIxQtJ_vvMwHgFBJvQHt_j1sZoQVN_w1Gc0tLMeDBIBw7XbjRK7Rt5U8Znba0cVZgs73ditJByOaN1ljLcyXLTa1PqNgyW0wLY9jeKIboVi5jfIZrrZMejJfnIYuJSqQOoSQ6OjMkFUgbE0z--8PbTH0Grl4FGGrZhZtzsN-iswEkHuWNydr0eSlfCf5xiBw8ZI9XHZEblUmL6OgCIdSfWjjGQIlrcM9FuWl6hD2c7SXbiP26v91LdSGbHhMTb7LGeNszYErbQqUMqJVwNEh9uViVeyvSny_fUK0cMuzYfgUoov7iYeyH8gLzF1zOe8zkVImKz2qF7zcdDiL1jRu_KQWQX4DFFrPlL3YWHrBmlEpmqDYi3qX7zIsBMBllnWBR5UFmjnc0x06EwycfBb_1zKtkGzEbhODuYa1iIsyDnaFvnbmOWOti2045s62pmH6RGWp5bWfhzp6SYR0E8';

        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] =userAuthentication;
        var resAd= $resource(baseServiceUrl + 'user/ads');
        return resAd.save(ad);
    }

    function deleteAd(idId) {
        return resource.delete({id: idId});
    }

    return {
        getPublicAds: getPublicAds,
        create: createNewAd,
        getById: getAdById,
        edit: editAd,
        delete: deleteAd
    }

}]);