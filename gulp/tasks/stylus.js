const gulp         = require('gulp');
const stylus       = require('gulp-stylus');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer-core');
const notify       = require('gulp-notify');
const plumber      = require('gulp-plumber');
const paths        = require('../config.js');

gulp.task('stylus', function() {
    return gulp.src(paths.css + 'styles.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .on('error', notify.onError(function (error) {
            return "Stylus: " + error.message;
        }))
        .pipe(postcss([ autoprefixer({
            browsers: [
                'ie >= 9',
                'Chrome >= 31',
                'Safari >= 7',
                'ff >= 38'
            ]
        }) ]))
        .pipe(gulp.dest(paths.dist + paths.css));
});
