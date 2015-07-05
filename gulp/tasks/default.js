var gulp = require('gulp'); // gulp сборщик

var runSequence = require('run-sequence'); // запустить последовательность

gulp.task('default',function(callback) {

    
	runSequence(
	  'build-clean',
	  ['build-scripts', 'build-styles-less'],
	  'watch',
	  callback);
	
});