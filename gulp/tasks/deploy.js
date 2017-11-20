const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const paths  = require('../config.js');

gulp.task('deploy', ['uglify', 'cssmin']);
