//script dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//compile scss into css for Bootstrap customisation
function style() {
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}
//compile scss into css for navbar module
function navbar() {
    return gulp.src('source/scss/navbar.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}
//compile scss into css for index module
function home() {
    return gulp.src('source/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
}
//compile scss into css for modular pages
function mainStyle() {
    return gulp.src('source/scss/mainStyle.scss')
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


//serve files to local host and update browser on changes **edit - currently not working as intended
function watch() {
    browserSync.init({
        server: {
           baseDir: "C:/Users/Peter/Documents/GitHub/Semblance/source",
           index: "index.html"
        }
    });
    gulp.watch('scss/*.scss', style)
    gulp.watch('scss/*.scss', mStyle)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}
//export functions
exports.style = style;
exports.watch = watch;
exports.compileJS = compileJS;
exports.navbar = navbar;
exports.home = home;
exports.mainStyle = mainStyle;
