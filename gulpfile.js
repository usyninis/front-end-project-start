var gulp = require('gulp'), // сборщик
	browserify = require('browserify'), // include frontend support
	source = require('vinyl-source-stream'), // return gulp pipe
	buffer = require('vinyl-buffer'), //  return streaming file contents
	uglify = require('gulp-uglify'), // Минификация JS
	less = require('gulp-less'), // less to css
	csso = require('gulp-csso'), // Минификация CSS
	concat = require('gulp-concat'); // Склейка файлов

var react = require('react'),
	reactify = require('reactify');
	
gulp.task('build-styles',function() {

  //gulp.src()
  return gulp.src('./assets/less/style.less')
    .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(less()) // less
	//.pipe(concat('style.css'))
	.pipe(csso())
    .pipe(gulp.dest('./public')); // даем команду на перезагрузку css


});

gulp.task('transform',function() {

  return browserify({
	  //insertGlobals: true,
	  entries: './assets/js/main.js',	  
	  transform: ['reactify'],
      //extensions: ['.jsx'],
	})
	.bundle()
	.pipe(source('client.js')) 
	.pipe(buffer())
	.pipe(uglify())   
	.pipe(gulp.dest('./public'));

/*   gulp.src('./assets/js/main.jsx')
	.on('error', console.log)
	.pipe(browserify())
	//.pipe(concat('client.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public')); */

});

gulp.task('build-scripts',function() {

  /* return browserify('./assets/js/main.jsx')
	.bundle() */
  return gulp.src('./build/*.js')
	.pipe(concat('client.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public'));

/*   gulp.src('./assets/js/main.jsx')
	.on('error', console.log)
	.pipe(browserify())
	//.pipe(concat('client.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public')); */

});

gulp.task('build', function() {

  //gulp.watch('./assets/less/*.less',['build-styles']);
  //gulp.watch('./assets/js/*.js',['build-scripts']);
  gulp.run('transform');
  //gulp.run('build-scripts');

});

