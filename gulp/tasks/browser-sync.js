const gulp        = require('gulp');
const browserSync = require('browser-sync');
const path        = require('../config.js');

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "http://127.0.0.1:8888/boilerplate"
	});
});