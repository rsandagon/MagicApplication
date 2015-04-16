var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('magic', shell.task([
	'rm -rf Gulpfile.js',
	'rm -rf package.json',
	'rm -rf README.md',
	'rm -rf node_modules'
	], console.log('Gulp file has been deleted..pfft!')));