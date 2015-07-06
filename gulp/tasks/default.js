var gulp = require('gulp'); // gulp �������

var runSequence = require('run-sequence'); // ��������� ������������������

gulp.task('default',function(callback) {

    
	runSequence(
	  'build-clean',
	  [
	    'build-images',  
	    'build-sprite',  
	    'build-scripts', 
	    'build-styles-less', 
	    'build-react-scripts'
	  ],
	  'watch',
	  callback);
	
});