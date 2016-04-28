"use strict";

const gulp = require("gulp");
const sequence = require("gulp-sequence");

const defaultTask = (cb) => {
	sequence("clean", "browserify", ["watch"], cb);
};

gulp.task("default", defaultTask);
module.exports = defaultTask;
