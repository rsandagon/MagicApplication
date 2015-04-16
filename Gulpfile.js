var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('magic', shell.task([
	'rm -rf Gulpfile.js',
	'rm -rf package.json',
	'rm -rf README.md',
	'rm -rf node_modules',
	'rm -rf .git',
	'rm -rf .gitignore'
	], console.log("MAGIC! I'LL MAKE EVERYTHING DISAPPEAR..PFFFFTT.. magic")));