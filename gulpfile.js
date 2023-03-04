var gulp = require('gulp'),
    uglify = require('gulp-uglify'), // 压缩js文件
    sass = require('gulp-sass')(require('sass')), // 编译sass
    cleanCSS = require('gulp-clean-css'), // 压缩css文件
    rename = require('gulp-rename'); // 文件重命名

gulp.task('scripts', function(done){
    gulp.src('dev/js/index.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js'));
    done();
});

gulp.task('sass', function(done){
    gulp.src('dev/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/sass'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
    done();
});

gulp.task('watch', function(done){
    gulp.watch('dev/sass/*.scss', ['sass']);
    gulp.watch('dev/js/*.js', ['scripts']);
    done();
});

gulp.task('default', gulp.series('scripts', 'sass', 'watch'));