"use strict";

const gulp = require("gulp");

const watchTask = ["copy", "sass", "browserSync"];

gulp.task("watch", watchTask);
module.exports = watchTask;
