const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel')
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;

gulp.task('zadanie', function () {
  console.log('zadanie11');
})

gulp.task('sass', function () {
  // skąd gulp ma pobrać zasoby do procesu - wszystkie pliki jakie są w strukturze
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
})


gulp.task('js', function () {
  return gulp.src('app/js/main.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('app/js'))

})

gulp.task('watch', function () {
  //sprawdz czy zmieniły się pliki, jeśli nastąpi zmiana to odpal to zadanie
  gulp.watch('app/js/main.js', gulp.series('js'));
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})



//npm install --global gulp-cli
//npm init
// npm install gulp --save-dev
//npm install gulp-sass --save-dev

//babel i zmiana nazw 
// npm install --save-dev gulp-uglify-es
//npm i gulp-rename
//npm i gulp-babel
// npm install --save-dev gulp-babel @babel/core @babel/preset-env