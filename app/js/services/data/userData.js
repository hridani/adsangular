adsProject.factory('userData', ['$resource', '$http', 'baseServiceUrl', 'authentication', function ($resource, $http, baseServiceUrl, authentication) {


    function registerUser(user) {
        var resource = $resource(baseServiceUrl + 'user/register')
            .save(user);
        resource.$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
        return resource;
    }

    function loginUser(user) {
        var resource = $resource(baseServiceUrl + 'user/login')
            .save(user);
        resource.$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
        return resource;
    }

    function getUserProfile() {
        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] = userAuthentication;
        var resource = $resource(baseServiceUrl + 'user/profile')
            .get();
        return resource;
    }

    function updateUserProfile(user) {
        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] = userAuthentication;
        var resource = $resource(baseServiceUrl + 'user/profile', {adId: '@id'}, {
            update: {method: 'PUT'}
        });

        return resource.update(user);
    }
    function changePassword(passwordData) {
        var userAuthentication = authentication.getHeaders().Authorization;
        $http.defaults.headers.common['Authorization'] = userAuthentication;

        var resource = $resource(baseServiceUrl + 'user/changepassword', {adId: '@id'}, {
            update: {method: 'PUT'}
        });
        return resource.update(passwordData);
    }

    function logoutUser() {
        authentication.removeUser();

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
        getUser: getUserProfile,
        updateUser:updateUserProfile,
        changePassword:changePassword
    }
}]);
