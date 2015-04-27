var gulp = require('gulp'),
	less = require('gulp-less'),
	csso = require('gulp-csso'); // Минификация CSS

gulp.task('build-styles',function() {

  //gulp.src()
  gulp.src('./assets/less/style.less')
    .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(less()) // less
    .pipe(csso()) // less
    .pipe(gulp.dest('./public/style.css')); // даем команду на перезагрузку css


});

gulp.task('build', function() {

  gulp.run('build-styles');

});