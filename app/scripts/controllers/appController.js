define(function(require){
    var app = require('app');
    app.controller('AppController', function($scope, $state){
        console.log('appcontroller')
        $scope.$on('$routeChangeStart', function(){
            console.log('$routeChangeStart');
        });
    });
});