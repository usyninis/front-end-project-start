var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var csso = require('gulp-csso');

var paths = require('./../paths');

var errorHandler = require('./../errorHandler');

gulp.task('build-styles-less',function() {

  return gulp.src(paths.DEV_LESS+'/common.less')    
    //.on('error', gutil.log) // Если есть ошибки, выводим и продолжаем
    .pipe(less()) // less
    .on('error', errorHandler)
	//.pipe(concat('style.css'))
	.pipe(csso())
	.pipe(concat('common.min.css'))
    .pipe(gulp.dest(paths.BUILD_CSS)); // даем команду на перезагрузку css

	
});