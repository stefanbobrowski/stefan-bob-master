var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('scss/**/*.scss')
      .pipe(concat('main.css'))
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 4 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
   gulp.src(['scripts/jquery-3.0.0.min.js',
       'scripts/jquery.matchHeight.js',
       'scripts/main.js'])
       .pipe(concat('main.js'))
       .pipe(uglify())
       .pipe(gulp.dest('js'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('scripts/**/*.js',['scripts']);
});
