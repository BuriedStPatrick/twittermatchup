var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
	cssmin = require('gulp-cssmin');

gulp.task('webserver', function(){
	gulp.src('app')
		.pipe(webserver({
			livereload: false,
			open: true,
			fallback: 'index.html'
		}));
});

gulp.task('watch', function(){
	gulp.watch('app/css/*.less', ['less']);
})

gulp.task('less', function(){
	return gulp.src('app/css/*.less')
		.pipe(less().on('error', function(err){
			console.log(err);
		}))
		.pipe(cssmin().on('error', function(err){
			console.log(err);
		}))
		.pipe(gulp.dest('app/css/'));
});