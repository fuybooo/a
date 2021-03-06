// 载入插件
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

// 压缩vendor
gulp.task('vendor', ['clean:vendor'], function () {
    var filterJS = $.filter('./app/vendor/**/*.js', {
        restore: true
    });
    var filterCss = $.filter('./app/vendor/**/*.css', {
        restore: true
    });
    return gulp.src('./app/vendor/**/*.*')
        .pipe(filterJS)
        .pipe($.uglify())
        .pipe(filterJS.restore)
        .pipe(filterCss)
        .pipe($.cleanCss())
        .pipe(filterCss.restore)
        .pipe(gulp.dest('./dist/vendor'))
        .pipe($.notify({
            message: 'vendor task complete'
        }));
});
// 清除dist/vendor
gulp.task('clean:vendor', function () {
    return gulp.src(['./dist/vendor/**/*.*'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
// 压缩scripts
gulp.task("scripts", ['clean:scripts'], function () {
    return gulp.src("./app/scripts/**/*.js")
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.uglify())
        .pipe(gulp.dest("./dist/scripts"))
        .pipe($.notify({
            message: 'scripts task complete'
        }));
});
// 清除dist/scripts
gulp.task('clean:scripts', function () {
    return gulp.src(['./dist/scripts/**/*.js'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
// 压缩json
gulp.task("json", ['clean:json'], function () {
    return gulp.src("./app/json/**/*.json")
        .pipe(gulp.dest("./dist/json"))
        .pipe($.notify({
            message: 'json task complete'
        }));
});
// 清除dist/json
gulp.task('clean:json', function () {
    return gulp.src(['./dist/json/**/*.json'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
// 压缩styles
gulp.task('styles', ['clean:styles'], function () {
    return gulp.src('./app/styles/**/*.css')
        .pipe($.autoprefixer())
        .pipe($.csscomb())
        .pipe($.cleanCss())
        .pipe(gulp.dest('./dist/styles'))
        .pipe($.notify({
            message: 'styles task complete'
        }));
});
// 清除dist/styles
gulp.task('clean:styles', function () {
    return gulp.src(['./dist/styles/**/*.css'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
// 压缩images
gulp.task('images', ['clean:images'], function () {
    return gulp.src('./app/images/**/*.*')
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./dist/images'))
        .pipe($.notify({
            message: 'images task complete'
        }));
});
// 清除dist/images
gulp.task('clean:images', function () {
    return gulp.src(['./dist/images/**/*.*'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
// 压缩views
gulp.task('views', ['clean:views'], function () {
    return gulp.src('./app/views/**/*.html')
        .pipe($.htmlmin({
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('./dist/views'))
        .pipe($.notify({
            message: 'images task complete'
        }));
});
// 清除dist/views
gulp.task('clean:views', function () {
    return gulp.src(['./dist/views/**/*.*'], {
        read: false
    })
        .pipe($.plumber({
            errorHandler: function (error) {
                $.notify.onError('Error: <%= error.message %>')
            }
        }))
        .pipe($.clean());
});
var copyA2B = function (A, B) {
    var dirs = ['images', 'json', 'scripts', 'styles', 'vendor', 'views'];
    for (var i = 0, l = dirs.length; i < l; i++) {
        var dir = dirs[i],
            start = './' + A + '/' + dir + '/**/*.*',
            end = './' + B + '/' + dir;
        gulp.src(start)
            .pipe(gulp.dest(end))
            .pipe($.notify({
                message: 'copy ' + dir + ' complete'
            }));
    }
};
// clean app
gulp.task('clean:app', function () {
    return gulp.src(['./app/**/*.*'], {
        read: false
    })
        .pipe($.clean());
});
// clean .temp
gulp.task('clean:temp', function () {
    return gulp.src(['./.temp/**/*.*'], {
        read: false
    })
        .pipe($.clean());
});
// clean dist
gulp.task('clean:dist', function () {
    return gulp.src(['./dist/**/*.*'], {
        read: false
    })
        .pipe($.clean());
});
gulp.task('jshint', function () {
    return gulp.src('./app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'));
});

// 静态服务
gulp.task('serve', function () {
    browserSync.init({
        server: './'
    });
    gulp.watch(['app/**/*.*', 'index.html']).on('change', browserSync.reload);
});
// 监听任务
gulp.task('watch', function () {
    gulp.watch('./app/images/**/*.*', ['images']);
    gulp.watch('./app/json/*.json', ['json']);
    gulp.watch('./app/scripts/**/*.js', ['jshint', 'scripts']);
    gulp.watch('./app/styles/**/*.css', ['styles']);
    gulp.watch('./app/vendor/**/*.*', ['vendor']);
    gulp.watch('./app/views/**/*.html', ['views']);
    
});
// 组合任务build
gulp.task('build', function () {
    gulp.start('clean:dist', 'images', 'json', 'scripts', 'styles', 'vendor', 'views');
});

// copy app -- 备份app
gulp.task("bak", ['clean:temp'], function () {
    return copyA2B('app', '.temp');
});

// copy dist -- 进入release模式
gulp.task('replace', ['clean:app'], function () {
    return copyA2B('dist', 'app');
});

// copy .temp -- 恢复到开发模式
gulp.task('dev', ['clean:app'], function () {
    return copyA2B('.temp', 'app');
});

// release 任务
// gulp.task('release', ['build', 'bak', 'replace']);// 执行组合任务时出现问题，分开执行正常

// 默认组合任务
//gulp.task('default', ['serve', 'watch']);
gulp.task('default', ['serve']);