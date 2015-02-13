var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload'),
	concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
	clean = require('gulp-clean');

gulp.task('default', ['concat-css', 'concat-js', 'minify-js', 'copyFonts']);

gulp.task('concat-css', function(){
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("./dist/css"));
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap-theme.min.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("./dist/css"));
    gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("./dist/css"));
    gulp.src('./src/css/style.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('minify-css', function() {
    gulp.src('./dist/css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('concat-js', function(){
    gulp.src(
        ['./bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify-js', function(){
    gulp.src('./dist/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('clean', function(){
	gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('copyFonts'), function(){
	gulp.src('./bower_components/font-awesome/fonts/**')
	.pipe(gulp.dest('./dist'));
}

gulp.task('watch', function() {
  //livereload.listen();
  //gulp.watch(['./index.html', './js/*.js', './css/*.css'], ['default']);
});