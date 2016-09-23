var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss
    .pipe(concat('main.css'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
  gulp.src('scripts/**/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js'));
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
    },
  })
})

gulp.task('default', ['browserSync'], function (){
  gulp.watch('scss/**/*.scss',['styles'], browserSync.reload);
  gulp.watch('scripts/**/*.js',['scripts'], browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
