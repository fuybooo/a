define(function (require) {
    var app = require('app');
    var angular = require('angular');
    app.controller('CommonFunctionController', function ($scope, $state, $location, $anchorScroll) {
        $scope.catalog = [
            {
                id: 'table-example',
                name: '分页表格示例',
                active: true
            },
            {
                id: 'head-example',
                name: '头像上传示例',
                active: false
            },
            {
                id: 'pop-example',
                name: '弹出层示例',
                active: false
            },
            {
                id: 'loading-example',
                name: 'loading层示例',
                active: false
            }
        ];
        $scope.changeAnchor = function (index) {
            angular.forEach($scope.catalog, function(value){
                if(value.active){
                    value.active = false;
                }
            });
            $scope.catalog[index].active = true;
            // $location.hash($scope.catalog[index].id);
            $anchorScroll($scope.catalog[index].id);
        };
        // 控制器中应该只写逻辑,指令中更应该只写DOM操作,调用controller中的逻辑
    });
});