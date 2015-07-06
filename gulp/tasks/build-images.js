var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

var paths = require('./../paths');
var config = require('./../config');

var errorHandler = require('./../errorHandler');

gulp.task('build-images', function(){
    return gulp.src(paths.DEV_IMAGES+'/*')
        //.pipe(imagemin())
		//.on('error', errorHandler)
        .pipe(gulp.dest(paths.BUILD_IMAGES));
});