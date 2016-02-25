

(function(){

    angular

        .module("pics-angular", [])

        .controller("photos", function($scope, $http) {
            $scope.posts = [];

            $http.jsonp("https://api.instagram.com/v1/tags/mafiaboss/media/recent?callback=JSON_CALLBACK&count=14&access_token=1273986390.3904bbe.64b4fd3142d4488791555ad1b4105724")
                .success(function (data, status, headers, config) {
                $scope.posts = data;
                console.log(posts);
                //$scope.url = data[i].images.low_resolution.url;
            }).error(function (data, status, headers, config) {

                console.log('error');
                // log error
            });


    })
})()
