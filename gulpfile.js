var gulp = require('gulp'), // сборщик
	//gutil = require('gulp-util'), // утилиты сборщика
	browserify = require('browserify'), // include frontend support
	source = require('vinyl-source-stream'), // return gulp pipe
	buffer = require('vinyl-buffer'), //  return streaming file contents
	uglify = require('gulp-uglify'), // Минификация JS
	less = require('gulp-less'), // less to css
	csso = require('gulp-csso'), // Минификация CSS
	concat = require('gulp-concat'), // Склейка файлов
	watch = require('gulp-watch'); // gulp отслеживание

var react = require('react'),
	reactify = require('reactify');

var path = {
	CSS:   'df'
};
	
gulp.task('build-styles',function() {

  //gulp.src()
  //console.log('build-styles run');
  return gulp.src('./assets/less/style.less')    
    //.on('error', gutil.log) // Если есть ошибки, выводим и продолжаем
    .pipe(less()) // less
    .on('error', swallowError)
	//.pipe(concat('style.css'))
	.pipe(csso())
	.pipe(concat('style.css'))
    .pipe(gulp.dest('./public')); // даем команду на перезагрузку css


});

gulp.task('transform',function() {

  return browserify({
	  //insertGlobals: true,
	  entries: './assets/js/main.js',	  
	  transform: ['reactify'],
      //extensions: ['.jsx'],
	})
  	.on('error', swallowError)
	.bundle()
  	.on('error', swallowError)
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

gulp.task('watch-build', function() {

  gulp.start('build-styles');

  watch(['./assets/less/**/*.less'], function() {

    gulp.start('build-styles');

  });

  gulp.start('transform');

  watch(['./assets/js/**/*.js'], function() {

    //gulp.start('build-scripts');
    gulp.start('transform');

  });
  
   //gulp.watch('./assets/js/*.js',['build-scripts']);
  //gulp.run('transform');
  //gulp.run('build-scripts');

});


function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}
