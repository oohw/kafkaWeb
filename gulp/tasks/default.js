"use strict";

const gulp = require("gulp");
const sequence = require("gulp-sequence");

const defaultTask = (cb) => {
	sequence("clean", ["watch", "browserify", "nodemon"], cb);
};

gulp.task("default", defaultTask);
module.exports = defaultTask;
