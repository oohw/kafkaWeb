"use strict";

const gulp = require("gulp");
const del = require("del");
const config = require("../config");

const cleanTask = (cb) => {
	del([config.root.dist]).then((paths) => {
		cb();
	});
};

gulp.task("clean", cleanTask);
module.exports = cleanTask;
