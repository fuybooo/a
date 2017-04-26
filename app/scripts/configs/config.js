require.config({
    baseUrl: './app/',
    waitSeconds: 0, //永不超时
    paths: {
        // 库文件
        'angular': 'vendor/angular/angular',
        'angular-animate': 'vendor/angular-animate/angular-animate',
        'angular-touch': 'vendor/angular-touch/angular-touch',
        'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
        'restangular': 'vendor/restangular/dist/restangular',
        'angular-sanitize': 'vendor/angular-sanitize/angular-sanitize',
        'angular-ui-load': 'vendor/angular-ui-load/angular-ui-load',
        'angular-async-loader': 'vendor/angular-async-loader/angular-async-loader',
        'jquery': 'vendor/jquery/dist/jquery',
        'bootstrap-table': 'vendor/bootstrap-table/src/bootstrap-table',
        'bootstrap-table-zh-CN': 'vendor/bootstrap-table/src/locale/bootstrap-table-zh-CN',
        'bootstrap-select': 'vendor/bootstrap-select/dist/js/bootstrap-select',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'underscore': 'vendor/underscore/underscore',
        'lodash': 'vendor/lodash/lodash',
        'zTree': 'vendor/zTree/js/jquery.ztree.all.min',
        'ECharts': 'vendor/ECharts/echarts-all',
        'bootstrap-datetimepicker': 'vendor/bootstrap-datetimepicker/src/js/bootstrap-datetimepicker',
        'bootstrap-datetimepicker-zh-CN': 'vendor/bootstrap-datetimepicker/src/js/locales/bootstrap-datetimepicker.zh-CN',
        
        // app文件
        'app': 'scripts/configs/app',
        'commonDirective': 'scripts/directives/commonDirective',
        'commonService': 'scripts/services/commonService',
        'commonFilter': 'scripts/filters/commonFilter',
        'dataService': 'scripts/services/dataService',
        'router': 'scripts/configs/router'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular'],
            exports: 'angular-animate'
        },
        'angular-touch': {
            deps: ['angular'],
            exports: 'angular-touch'
        },
        'angular-bootstrap': {
            deps: ['angular'],
            exports: 'angular-bootstrap'
        },
        'angular-ui-router': {
            deps: ['angular'],
            exports: 'angular-ui-router'
        },
        'restangular': {
            deps: [
                'angular',
                'underscore',
                'lodash'
            ],
            exports: 'restangular'
        },
        'angular-sanitize': {
            deps: ['angular'],
            exports: 'angular-sanitize'
        },
        'angular-ui-load': {
            deps: ['angular'],
            exports: 'angular-ui-load'
        },
        'angular-async-loader': {
            deps: ['angular'],
            exports: 'angular-async-loader'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'bootstrap-table': {
            deps: ['bootstrap']
        },
        'bootstrap-select': {
            deps: ['bootstrap']
        },
        'zTree': {
            deps: ['jquery']
        },
        'ECharts': {
            deps: ['jquery']
        },
        'bootstrap-table-zh-CN': {
            deps: ['bootstrap-table']
        },
        'app': {
            deps: [
                'angular',
                'angular-async-loader',
                'angular-ui-router',
                'angular-ui-load',
                'restangular',
                'angular-sanitize',
                'angular-animate',
                'angular-touch',
                'angular-bootstrap'
            ]
        },
        'bootstrap-datetimepicker': {
            deps: ['bootstrap']
        },
        'bootstrap-datetimepicker-zh-CN': {
            deps: ['bootstrap-datetimepicker']
        }
    }
});

require(
    [
        'angular',
        'jquery',
        'underscore',
        
        'angular-async-loader',
        'angular-ui-load',
        'angular-ui-router',
        'angular-animate',
        'angular-sanitize',
        'angular-touch',
        'angular-bootstrap',
        'restangular',
        
        'bootstrap',
        'zTree',
        'ECharts',
        
        'bootstrap-table',
        'bootstrap-select',
        'bootstrap-datetimepicker',
        
        'bootstrap-table-zh-CN',
        'bootstrap-datetimepicker-zh-CN',
        
        'app',
        'commonDirective',
        'commonService',
        'dataService',
        'commonFilter',
        'router',
        
        'require',
        'exports',
        'module'
    ],
    function (require, exports, module) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    }
);