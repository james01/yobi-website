"use strict";

var Fiber = require("fibers");
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("sass");

// Optimize all the images
gulp.task("optimize-images", () => {
  return gulp.src("./src/**/*.{png,jpg,jpeg,gif,svg}").pipe(imagemin()).pipe(gulp.dest("src"));
});

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
