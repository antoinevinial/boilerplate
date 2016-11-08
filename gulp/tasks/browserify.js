var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var paths      = require('../config.js');
var notify     = require("gulp-notify");

gulp.task('browserify', function() {
    return browserify('./' + paths.scripts + 'main/base.js')
    .transform(babelify)
    .bundle()
    .on('error', notify.onError(function (error) {
        return "Js: " + error.message;
    }))
    .pipe(source('main.js'))
    .pipe(gulp.dest(paths.dist + paths.scripts));
});
