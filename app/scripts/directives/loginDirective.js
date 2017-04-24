define(function(require) {
    var app = require('app'),
        $ = require('jquery');
    app.directive('limitInputDirective', function() {
            return {
                controller: 'LoginController',
                link: function(scope, ele, attrs) {
                    scope.loginText = $('.login-limit-text').text();
                    console.log('limitInputDirective', scope.loginText);
                    scope.watchCounter = 0;
                    scope.keyUpCounter = 0;
                    scope.$watch('login.loginInput', function(newVal, oldVal) {
                        if(newVal) {
                            if(scope.loginText.indexOf(newVal) === 0) {
                                scope.watchCounter++;
                            }
                        }
                    });
                    $(ele).keyup(function(e) {
                        scope.keyUpCounter++;
                    });

                }
            };
        })
        .directive('loginDirective', function() {
            return {
                scope: {
                    onClickLogin: '&'
                },
                controller: 'LoginController',
                link: function(scope, ele, attrs) {
                    console.log('loginDirective');
                    $(ele).click(function() {
                        scope.onClickLogin(scope.login);
                    });
                }
            };
        });
});