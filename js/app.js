(function () {
    var app = angular.module('blog', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/home", { 
            templateUrl: "templates/home.html",
            controller: ['$http', function($http) {
                this.msg = "Info"
            }],
            controllerAs: 'hm'
        })
        .when("/features", { templateUrl: "templates/features.html" })
        .when("/pricing", { template: "<h1>Price COntent</h1>" })
        .otherwise({
            redirectTo: "/home"
        })
    }])

    app.controller("PhoneController", ['$http', function ($http) {
        this.addReview = function() {
            this.reviews.push(this.newr)
            this.newr = {}
        }
        this.newr = {

        }
        this.reviews = [{
            name: 'Guest 1',
            rating: 4,
            description: 'Good'
        },{
            name: 'Guest 2',
            rating: 2,
            description: 'Not Bad'
        },{
            name: 'Guest 3',
            rating: 3,
            description: 'OK'
        }]
    }]);

})();