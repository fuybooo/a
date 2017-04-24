define(function(require){
    var app = require('app');
    app.controller('LoginController', ['$scope', '$state', 'commonService', function($scope, $state, commonService){
        console.log('LoginController:commonService', commonService);
        // 赋值
        $scope.login = {};

        // 执行登录
        $scope.runLogin = function(login){
            console.log($scope);
//          if($scope.keyUpCounter < 49){
//              commonService.alert('请手动输入“' + $scope.loginText + '”', 'd');
//          }else 
            if($scope.login.loginInput === $scope.loginText){
                $state.go('app.oa');
            }
        };
    }]);

});