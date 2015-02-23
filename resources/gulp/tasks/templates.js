var gulp         = require('gulp');
var jade         = require('gulp-jade');
var paths        = require('../config.js');

gulp.task('templates', function() {
  return gulp.src('templates/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.base));
});
