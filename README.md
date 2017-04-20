#a

#2017-04-20

#学习经验总结项目

##项目环境

#####requirejs + angularjs + gulp + npm + karma

##目录结构

    a/
    ├── app                                开发目录
    │   ├── images                         图片
    │   │   ├── logo.png
    │   │   ├── ..
    │   │   └── ..
    │   ├── json                           json
    │   │   ├── login.json
    │   │   ├── ..
    │   │   └── ..
    │   ├── scripts                        js资源目录
    │   │   ├── configs                    项目配置
    │   │   │   ├── app.js                 主模块
    │   │   │   ├── config.js              requirejs配置
    │   │   │   ├── router.js              angularjs路由
    │   │   │   ├── ..
    │   │   │   └── ..
    │   │   ├── controllers                控制器
    │   │   │   ├── loginController.js
    │   │   │   ├── ..
    │   │   │   └── ..
    │   │   ├── directives                 指令
    │   │   │   ├── loginDirective.js
    │   │   │   ├── ..
    │   │   │   └── ..
    │   │   ├── filters                    过滤器
    │   │   │   ├── loginFilter.js
    │   │   │   ├── ..
    │   │   │   └── ..
    │   │   ├── services                   服务
    │   │   │   ├── dataService.js
    │   │   │   ├── ..
    │   │   │   └── ..
    │   ├── styles                         样式
    │   │   ├── base.css
    │   │   ├── style.css
    │   │   ├── ..
    │   │   └── ..
    │   ├── views                          模板
    │   │    ├── login.html
    │   │    ├── ..
    │   │    └── ..
    │   ├── vendor                     库文件
    │   │    └── angular
    │   │       └── angular.js
    │   │    ├── ..
    │   │    └── ..
    ├── dist                               压缩目录
    ├── gulpfile.js                        自动化工作流配置
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── test                               测试目录
        ├── karma.conf.js                  karma配置文件
        ├── scripts                        karma测试目录
        └── test-main.js


##使用说明

#####1.项目环境，需先安装git，nodejs
#####2.项目从git服务器down下来后，通过终端进入到项目的当前目录: cd /a
#####3.执行相关命令：
######npm install --save-dev 下载npm包
######gulp 启动项目，可以在此基础上继续开发
######karma start test/karma.conf.js 启动测试，可以执行测试

