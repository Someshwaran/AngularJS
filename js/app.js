(function () {
    var app = angular.module('blog', []);

    app.controller("PhoneController", ['$http', function ($http) {

        var cur = this;

        this.books = [];

        $http.get('http://localhost:3000/books').then(function (res) {
            cur.books = res.data
        }, function () {});

        this.toggleEdit = function (id, index) {
            if (!this.books[index].status) {
                this.books[index].status = true;
            } else {
                this.books[index].status = false;
            }
        };

        this.updateBook = function (id, index) {
            delete cur.books[index].status
            $http.put('http://localhost:3000/books/' + id, cur.books[index]).then(function (res) {
                cur.books[index].status = false;
            }, function () {});
        };

        //var cur = this;
        this.deleteContact = function (id, index) {
            //console.log(cur.books[index])
            $http.delete('http://localhost:3000/books/' + id).then(function (res) {
                cur.books.splice(index, 1);
            }, function () {});

        };

        this.addNewPhone = function () {
            var now = new Date()
            cur.rec.id = now.getTime()
            $http.post('http://localhost:3000/books', cur.rec).then(function (res) {
                cur.books.push(cur.rec);
            }, function () {});

            cur.rec = {}
        };

    }]);

})();