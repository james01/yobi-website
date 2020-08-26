"use strict";

var Fiber = require("fibers");
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("sass");

// Generate the css with sass and autoprefixer
gulp.task("css", () => {
  return gulp
    .src("./src/scss/**")
    .pipe(sass({ fiber: Fiber }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./src/site/_includes/css"));
});

// Watch folders for changes
gulp.task("watch", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("css"));
});

// Build
gulp.task("build", gulp.parallel("css"));
