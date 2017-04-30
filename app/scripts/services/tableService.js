define(function (require) {
    var app = require('app');
    var angular = require('angular');
    app.factory('tableService', function ($http, baseRequsetUrl) {
        var service = {};
        
        service.getUsersColumns = function () {
            return [
                {
                    field: '',
                    checkbox: true,
                    align: 'center',
                    valign: 'middle'
                },
                {
                    field: 'userId',
                    title: '人员编号',
                    align: 'center',
                    sortable: true
                },
                {
                    field: 'username',
                    title: '人员姓名',
                    align: 'center',
                    sortable: true
                },
                {
                    field: 'userState',
                    title: '人员状态',
                    align: 'center',
                    sortable: true,
                    formatter: function(value){
                        return value === 1 ? '在职' : '离职';
                    }
                },
                {
                    field: 'entryDate',
                    title: '入职日期',
                    align: 'center',
                    sortable: true
                },
                {
                    title: '操作',
                    align: 'center',
                    formatter: function(value, row ,index){
                        return '<span class="glyphicon glyphicon-pencil img js-op js-op-edit" title="编辑" data-index="' + index + '"></span>' +
                            '<span class="glyphicon glyphicon-trash img js-op js-op-delete" title="删除" data-index="' + index + '"></span>';
                    }
                }
            ];
        };
        return service;
    });
});