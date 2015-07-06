var gulp = require('gulp');

var gutil = require('gulp-util');

var del = require('del');

var paths = require('./../paths');
var config = require('./../config');



gulp.task('build-clean',function() {

   /*  console.log('build-clean >'+paths.BUILD_CSS);
    console.log('build-clean >'+paths.BUILD_JS); 
	*/
	del([
	  paths.BUILD_IMAGES+'/*',
	  paths.BUILD_CSS+'/*',
	  paths.BUILD_JS+'/*'
	], function (err, paths) {
		//console.log('Deleted files/folders:\n', paths.join('\n'));
		gutil.log(gutil.colors.green('Deleted files/folders:\n', paths.join('\n')));
		
	});
});