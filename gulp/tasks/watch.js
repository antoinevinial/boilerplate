const gulp        = require('gulp');
const browserSync = require('browser-sync');
const paths       = require('../config.js');

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(paths.scripts + 'main/**/*.js', ['browserify', browserSync.reload]);
    gulp.watch(paths.css + '**/*.styl', ['stylus', browserSync.reload]);
});
