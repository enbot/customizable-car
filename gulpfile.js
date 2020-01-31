"use strict"

const gulp = require('gulp')
const terser = require('gulp-terser')
const minifycss = require("gulp-minify-css")
const minifyhtml = require("gulp-minify-html")
const browserSync = require("browser-sync").create()

gulp.task("html", function () {
    return gulp.src('./exports/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('css', () => {
    return gulp.src('./exports/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task("js", function () {
    return gulp.src("./exports/*.js")
        .pipe(terser())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task("watchfiles", function () {

    browserSync.init({
        open: "external",
        port: 4200,
        server: { baseDir: './build/' },
        injectChanges: true,
        ui: { port: 4201 }
    })

    gulp.watch("./exports/*.html", gulp.series("html"))
    gulp.watch("./exports/*.css", gulp.series("css"))
    gulp.watch("./exports/*.js", gulp.series("js"))
})

gulp.task('build', gulp.series(['html', 'css', 'js']))
gulp.task('run', gulp.series(['build', 'watchfiles'])) 
