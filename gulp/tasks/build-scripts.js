var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = require('./../paths');
var config = require('./../config');

gulp.task('build-scripts',function() {


  return gulp.src(paths.DEV_JS+'/**/*.js')
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(paths.BUILD_JS));
	
});