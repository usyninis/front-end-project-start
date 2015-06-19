var gulp = require('gulp');

var watch = require('gulp-watch');

var runSequence = require('run-sequence'); // запустить последовательность

var paths = require('./../paths');


gulp.task('watch', function() {

  //gulp.start('build-styles');

  watch([paths.DEV_LESS+'/**/*.less'], function() {

    runSequence('build-styles-less');

  });

  watch([paths.DEV_JS+'/**/*.js'], function() {

    runSequence('build-scripts');

  });

  watch([paths.DEV_REACT_JS+'/**/*.js',paths.DEV_REACT_JS+'/**/*.jsx'], function() {

    runSequence('build-react-scripts');

  });
  
   //gulp.watch('./assets/js/*.js',['build-scripts']);
  //gulp.run('transform');
  //gulp.run('build-scripts');

});