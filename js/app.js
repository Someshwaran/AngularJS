(function() {
    var app = angular.module('blog', []);

    app.controller("PostController", function() {
        console.log("Post Invoked");

        var post = [ {
            'title': 'MY First Post',
            'author': 'Guest',
            'content': 'This is my first post data using JS',
            'date_posted': '12-05-2018'
            }, {
                'title': 'MY Second Post',
                'author': 'Guest',
                'content': 'This is my second post data using JS',
                'date_posted': '16-05-2018'
            }, {
                'title': 'MY First Post',
                'author': 'Guest',
                'content': 'This is my first post data using JS',
                'date_posted': '12-05-2018'
            }, {
                'title': 'MY First Post',
                'author': 'Guest',
                'content': 'This is my first post data using JS',
                'date_posted': '12-05-2018'
            }, {
                'title': 'MY First Post',
                'author': 'Guest',
                'content': 'This is my first post data using JS',
                'date_posted': '12-05-2018'
            }, {
                'title': 'MY First Post',
                'author': 'Guest',
                'content': 'This is my first post data using JS',
                'date_posted': '12-05-2018'
            }
        ];

        this.topics = [post[0], post[1]];

        this.showAlert = function() {
            console.log("Show Alert called")
        };

    });

})();