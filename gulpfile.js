var gulp=require('gulp');
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

//sass
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
  	.pipe(plumber())
    .pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'] // 対象ブラウザの設定
		}))
    .pipe(gulp.dest('./root/css'));
});


//watch
gulp.task('watch', ['sass'], function(){
	gulp.watch("./sass/*.scss",["sass"]);
});