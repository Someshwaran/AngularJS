(function() {
    var app = angular.module('blog', []);

    app.controller("PhoneController", function() {
        
        var contacts = [
            {'name': 'Name 10', 'number': '+91-9876543210'},
            {'name': 'Name 11', 'number': '+91-9876543211'},
            {'name': 'Name 12', 'number': '+91-9876543212'},
            {'name': 'Name 13', 'number': '+91-9876543213'},
            {'name': 'Name 14', 'number': '+91-9876543214'},
            {'name': 'Name 15', 'number': '+91-9876543215'}
        ]

        this.books = contacts;

        this.toggleEdit = function(index) {
            if(this.books[index].status) {
                this.books[index].status = false;
            } else {
                this.books[index].status = true;
                //Do update by AJAX
            }
        };

        //var cur = this;
        this.deleteContact = function(index) {
            //console.log(cur.books[index])
            //Do delete by AJAX
            this.books.splice(index, 1);
        };

        this.addNewPhone = function() {
            this.books.push(this.rec);
            this.rec = {}
        };

    });

})();