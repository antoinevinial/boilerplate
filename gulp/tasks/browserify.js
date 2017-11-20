const gulp       = require('gulp');
const browserify = require('browserify');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
const paths      = require('../config.js');
const notify     = require("gulp-notify");

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
