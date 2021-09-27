var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('inline', function() {
    return gulp.src('*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});