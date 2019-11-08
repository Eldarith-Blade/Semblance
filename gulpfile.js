const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const  gulpOpen = require('gulp-open');
const os = require('os');

//compile scss into css for Bootstrap customisation
function style() {
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}

//compile scss into css for main style or wildcard files
function mStyle() {
    return gulp.src('source/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}

//Move required files to folder for Bootstrap
function compileJS() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("source/javascript"))
    .pipe(browserSync.stream());
}


//serve files to local host and update browser
function watch() {
    browserSync.init({
        server: {
           baseDir: "./source",
           index: "index.html"
        }
    });
    gulp.watch('source/scss/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;
exports.compileJS = compileJS;
exports.mStyle = mStyle;
