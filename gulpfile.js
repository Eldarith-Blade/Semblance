const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'source/scss/*.scss'])
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}

//Move required files to folder
function compileJS() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("source/javascript"))
    .pipe(browserSync.stream());
}


//reload browser
function watch() {
    browserSync.init({
        server: {
           baseDir: "./source",
           index: "index.html"
        }
    });
    gulp.watch('source/scss/**/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
exports.compileJS = compileJS;
