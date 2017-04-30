define(function(require){
    var app = require('app');
    var $ = require('jquery');
    // var Pop = require('popupwin');
    app.directive('bootstrapTable', function(dataService,tableService,popupwin,$compile){
        return {
            scope:{},
            controller: 'CommonFunctionController',
            link: function(scope, element, attrs){
                var $table = $(element).find('table');
                $table.bootstrapTable({
                    striped: true,
                    height: 400,
                    columns: tableService[attrs.url + 'Columns']()
                });
                dataService[attrs.url](function(res){
                    $table.bootstrapTable('load', res);
                    $table.on('click', '.js-op', function(){
                        var index = $(this).data('index');
                        console.log(res[index]);
                        // 弹出编辑页面
                        var editPop = popupwin.create({
                            title: '编辑人员信息',
                            width: 1000,
                            htmlUrl: 'app/views/user-info.html',
                            cls: 'edit-user',
                            scope: scope,
                            ok: function(){
                                console.log('ok');
                            }
                        });
                        // var formName = 'user_form';
                        // $('.pw-edit-user').find('.pw-js-ok').after(
                        //     $compile('<button class="btn btn-primary btn-sm pw-btn-ok pw-js-ok" ' +
                        //         'ng-disabled="' + formName + '.$invalid || ' + formName + '.$pristine">' +
                        //         '确定</button>')(scope)
                        // ).remove();
                        
                    });
                })
            }
        }
    });
});