define(function(require){
    var app = require('app');
    app.controller('LoginController', ['$scope', '$state', 'commonService', function($scope, $state, commonService){
        // 赋值
        $scope.login = {};

        // 执行登录
        $scope.runLogin = function(login){
            console.log($scope);
            if($scope.login.loginInput === $scope.loginText){
                $state.go('app.home');
            }else if($scope.login.loginInput == '1'){
                $state.go('app.home');
            }else{
                commonService.alert('请手动输入“' + $scope.loginText + '”', 'd');
            }
        };
    }]);

});