var gutil = require('gulp-util');

module.exports = function (error) {

    //If you want details of the error in the console
	
	/* gutil.log([
		(error.name + ' in ' + error.plugin).bold.red,
		'',
		error.message,
		''
	]).join('\n');
	 */
	 
	gutil.log(
	  gutil.colors.red(error.name + ' in ' + error.plugin),
	  '',
	  error.message,
	  ''
	);
	 
	/* if(gutil.env.beep) {
	  gutil.beep();
	} */
	
    //console.log(error.toString());

    this.emit('end');
}