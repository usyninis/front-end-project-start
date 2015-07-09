var gulp       = require('gulp');
var gutil = require('gulp-util');
var imageop   = require('gulp-image-optimization');

var paths = require('./../paths');
var config = require('./../config');

var errorHandler = require('./../errorHandler');

gulp.task('build-images', function(){
  var imgBuild = gulp.src([
	paths.DEV_IMAGES+'/*.png',
	paths.DEV_IMAGES+'/*.jpg',
	paths.DEV_IMAGES+'/*.jpeg',
	paths.DEV_IMAGES+'/*.gif',
  ]);
  
  if(gutil.env.compress) {
    imgBuild
	  .pipe(imageop({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }));
  }

  imgBuild
	.pipe(gulp.dest(paths.BUILD_IMAGES))
	.on('error', errorHandler);
});