define(function(require){
    var app = require('app'),
        $ = require('jquery');
    app.directive('bootstrapTable', function(dataService){
        return {
            scope:{},
            template: function(element, attrs){
                return '<table id="' + attrs.tableId + '"></table>';
            },
            link: function(scope, element, attrs){
                var $table = $(element).find('table');
                $table.bootstrapTable({
                    height: 400,
                    columns: getColumns()
                });
                dataService.getUsers(function(res){
                    $table.bootstrapTable('load', res);
                })
            }
        }
    });
    function getColumns(){
        return [
            {
                field: 'userId',
                title: '员工编号',
                align: 'center',
                sortable: true
            },
            {
                field: 'username',
                title: '员工姓名',
                align: 'center',
                sortable: true
            },
            {
                field: 'userState',
                title: '员工状态',
                align: 'center',
                sortable: true
            },
            {
                field: 'entryDate',
                title: '入职日期',
                align: 'center',
                sortable: true
            },
        ];
    }
});