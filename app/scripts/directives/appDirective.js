define(function(require){
    var app = require('app'),
        $ = require('jquery');
    app.directive('navDirective', function(){
        return {
            scope: {},
            templateUrl: 'app/views/nav.html',
            link: function(scope, ele, attrs){
            }
        };

    });
});