var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');

var browserify = require('browserify');

var paths = require('./../paths');
var config = require('./../config');

var errorHandler = require('./../errorHandler');

gulp.task('build-react-scripts',function() {

  return browserify({
	  //insertGlobals: true,
	  entries: paths.DEV_REACT_JS+'/common.js',	  
	  transform: ['reactify'],
      extensions: ['.jsx'],
	})
  	.on('error', errorHandler)
	.bundle()
  	.on('error', errorHandler)
	.pipe(source('common-react.min.js')) 
	.pipe(buffer())
	.pipe(uglify())   
	.pipe(gulp.dest(paths.BUILD_JS));

/*   gulp.src('./assets/js/main.jsx')
	.on('error', console.log)
	.pipe(browserify())
	//.pipe(concat('client.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public')); */

	
});