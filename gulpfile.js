var gulp = require('gulp');
var jshint = require('gulp-jshint');
//Kompiluje sassa
var sass = require('gulp-sass');
//Autoodświeżanie
var browserSync = require('browser-sync');
//Autoprefixy
var autoprefixer = require('gulp-autoprefixer');
//Mapa
var sourcemaps = require('gulp-sourcemaps');
//Obsługa błędów
var errorHandler = require('gulp-error-handle');

var imagemin = require('gulp-imagemin');


gulp.task('sass', function () {

    return gulp.src('./scss/main.scss') //Wejście
        .pipe(errorHandler()) // Obsługa błędów
        .pipe(sourcemaps.init()) //Rozpoczynam sourcemap
        .pipe(sass({
            outputStyle: 'nested'
        })) // Kompiluje sassa
        .pipe(sourcemaps.write()) //Zapisje mapę
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })) //Dodaję prefixy


        .pipe(gulp.dest('./css')) //Zapisuje do katalogu css
        .pipe(browserSync.stream()); // Odpalam stream do browser-sync

});


gulp.task('imagemin', function() {
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
});

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    }); // Startuje server z głównego katalogu

    gulp.watch("scss/**/*.scss", ['sass']); // Obserwuj katalog scss
    gulp.watch("*.html").on('change', browserSync.reload); //Obserwuj zmiany w index.html
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*', ['sass']);
})


gulp.task('test', function () {
    return gulp.src('./test.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});