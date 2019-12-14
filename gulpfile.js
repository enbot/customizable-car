"use strict";

// const gulp = require('gulp')
// const terser = require('gulp-terser')

// gulp.task("js", function () {
//     return gulp.src([
//         './js/*.js',
//         './js/**/**.js',
//     ])
//         .pipe(terser())
//         .pipe(gulp.dest('dist'))
// })

let gulp = require("gulp");
// let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
 
gulp.task("js", function () {
    return gulp.src([
                './js/*.js',
                './js/**/**.js',
            ])
        // .pipe(rename("bundle.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("dist/"));
});