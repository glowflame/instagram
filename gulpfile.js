var gulp = require('gulp'), // Сообственно Gulp JS
    less = require('gulp-less');


gulp.task('default',function(){

    gulp.watch('less/*.less', ['less']);


})

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});
