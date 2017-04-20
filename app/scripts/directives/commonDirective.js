define(function(require) {
    var app = require('app');
    app.directive('textDirective', function() {
        return {
            restrict: 'A',
            replace: true,
            template: '<p class="login-limit-text f20">' + getLoginText() + '</p>'
        };
    });

    function getLoginText() {
        var arr = [
            '我要好好学习',
            '学习是光荣的',
            '学到老活到老',
            '一天不学习我就会死',
            '学海无涯苦作舟'
        ];
        return arr[Math.floor(Math.random() * 5)];
    }
});