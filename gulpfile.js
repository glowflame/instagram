var gulp = require('gulp'), // Сообственно Gulp JS
    less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});
