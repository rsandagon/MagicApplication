var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('magic', shell.task(['rm -rf Gulpfile.js'], console.log('Gulp file has been deleted..pfft!')));