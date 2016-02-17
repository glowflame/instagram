/**
 * Created by nikita on 16.февраля.2016.
 */

(function(){

angular

    .module('main', [])
    .controller('myController', ['$scope',function($scope) {

        $scope.my = function(){

            alert($scope.myModel);

        }


    }]);

})();

//<html ng-app="main">
//    <head>
//    <meta charset="utf-8">
//    <title>instagram</title>
//    <link href="css/index.css" rel="stylesheet">
//    <link href="css/main.css" rel="stylesheet">
//    <script src="node_modules/angular/angular.js"></script>
//    <script src="main.js"></script>
//    </head>
//    <body>
//
//    <div ng-controller="myController">
//
//    <input type="text" ng-model="myModel">
//
//    <button ng-click="my()">alert</button>
//
//    <h3>{{myModel}}</h3>
//
//
//</div>
//
//
//
//
//
//
//</body>
//
//</html>