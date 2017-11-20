const gulp   = require('gulp');
const cssmin = require('gulp-cssmin');
const paths  = require('../config.js');

gulp.task('cssmin', ['stylus'], function () {
    return gulp.src(paths.dist + paths.css + '**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(paths.dist + paths.css));
});
