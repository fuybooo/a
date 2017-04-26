define(function (require) {
    var app = require('app');
    var angular = require('angular');
    //配置信息
    app.config(['RestangularProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', '$logProvider', function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider, $logProvider) {
        console.log('app.config')
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
                ],
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(
                                ['app/styles/login.css']
                            );
                        }]
                }
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
            .state('app.home', {
                url: '/home',
                templateUrl: 'app/views/home.html',
                controller: 'HomeController',
                dependencies: [
                    'scripts/controllers/homeController'
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
            .state('app.oa', {
                url: '/oa',
                templateUrl: 'app/views/oa.html',
                controller: 'OaController',
                dependencies: [
                    'scripts/controllers/oaController',
                    'scripts/directives/oaDirective'
                ]
            })
            .state('app.commonFunction', {
                url: '/commonFunction',
                templateUrl: 'app/views/commonFunction.html',
                controller: 'CommonFunctionController',
                dependencies: [
                    'scripts/controllers/commonFunctionController'
                ]
            })
            .state('app.bootstrap', {
                url: '/bootstrap',
                templateUrl: 'test/ui-test/bootstrap-detail.html'
            })
        ;
        $urlRouterProvider.otherwise('');
    }]);
    
    //用于初始化全局的数据，仅对全局作用域起作用
    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        console.log('app.run')
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        
        $rootScope.$on('$stateChangeStart', function (evt, next, current) {
            console.log('$stateChangeStart')
            if(next.name === 'app.oa'){
                $rootScope.layout = {
                    showAppHeader: false,
                    showAppFooter: false,
                    oaShow: true
                }
            }else{
                $rootScope.layout = {
                    showAppHeader: true,
                    showAppFooter: true,
                    oaShow: false
                }
            }
        });
        $rootScope.$on('$stateChangeSuccess', function (evt, next, current) {
        
        });
        $rootScope.$on('$stateChangeError', function (evt, next, current) {
        
        });
    }]);
});
