(function () {
    var app = angular.module('blog', []);

    app.controller("PhoneController", ['$http', function ($http) {
        this.tab = 0;

        this.setSelected = function(index) {
            this.tab = index
        }

        this.isSelected = function(index) {
            return this.tab == index
        }
    }]);

})();