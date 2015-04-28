var gulp=require('gulp');
var plumber = require("gulp-plumber");
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

//sass
gulp.task('sass', function () {
    return sass('./sass', {style: 'expanded',bundleExec: true})
    .on('error', function (err) {
      console.error('Error!', err.message);
   	})
    .pipe(plumber())
    .pipe(gulp.dest('./root/css'));
});


//watch
gulp.task('watch', ['sass'], function(){
	gulp.watch("./sass/*.scss",["sass"]);
});