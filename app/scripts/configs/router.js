define(function (require) {
    var app = require("app");
    var angular = require("angular");
    //用于初始化全局的数据，仅对全局作用域起作用
    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        /*返回上一页：（当前定的打开新窗口问题太多，比如详情页面什么时机关闭，等等。。。 单页应用SPA，除非必要不应该去打开太多窗口。）
         * 参数传递：1.rootScope变量，2事件机制。
         * */
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            // to be used for back button //won't work when page is reloaded.
            $rootScope.previousState_name = fromState.name;
            $rootScope.previousState_params = fromParams;
        });
        //back button function called from back button's ng-click="back()"
        $rootScope.back = function () {//实现返回的函数
            $state.go($rootScope.previousState_name, $rootScope.previousState_params);
        };
    }]);
    //配置信息
    app.config(['RestangularProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', '$logProvider', function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider, $logProvider) {
            //关闭	$log.debug();
            $logProvider.debugEnabled(false);

            RestangularProvider.setBaseUrl(app.dataServiceBaseUrl);

            // $httpProvider.interceptors.push('myInterceptor');
            //配置路由
            $stateProvider
                .state('login', {
                    url: '',
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginController',
                    // support to load more controllers, services, filters, ...
                    dependencies: [
                        'scripts/controllers/loginController',
                        'scripts/directives/loginDirective'
                    ]
                })
                /*app*/
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'app/views/app.html',
                    controller: 'AppController',
                    dependencies: [
                        'scripts/controllers/appController',
                        'scripts/directives/appDirective'
                    ]
                })
                /*仪表板*/
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/views/dashboard.html',
                    controller: 'DashboardController',
                    dependencies: [
                        'scripts/controllers/dashboardController',
                        'scripts/directives/dashboardDirective'
                    ]
                })
            ;
        $urlRouterProvider.otherwise('login');
    }]);
});
