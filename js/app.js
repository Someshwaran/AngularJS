(function () {
    var app = angular.module('blog', []);

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