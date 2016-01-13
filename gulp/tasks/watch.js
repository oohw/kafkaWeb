"use strict";

const gulp = require("gulp");

const watchTask = ["copy", "sass"];

gulp.task("watch", watchTask);
module.exports = watchTask;
