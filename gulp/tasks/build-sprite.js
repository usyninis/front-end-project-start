var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin   = require('gulp-imagemin');

var paths = require('./../paths');
var config = require('./../config');

var errorHandler = require('./../errorHandler');


gulp.task('build-sprite', function() {
    var spriteData = 
        gulp.src(paths.DEV_SPRITE+'/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }).on('error', errorHandler));

    spriteData.img
		//.pipe(imagemin())
		.pipe(gulp.dest(paths.BUILD_SPRITE)); // путь, куда сохраняем картинку
		
    spriteData.css
		.pipe(gulp.dest(paths.BUILD_SPRITE)); // путь, куда сохраняем стили
});