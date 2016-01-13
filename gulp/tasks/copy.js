"use strict";

const gulp = require("gulp");
const mergeStream = require("merge-stream");
const watch = require("gulp-watch");
const config = require("../config");

const copyTask = (cb) => {
	const fonts = gulp.src(config.root.src + "/client/fonts/**/*")
		.pipe(watch(config.root.src + "/client/fonts/**/*"))
		.pipe(gulp.dest(config.root.dest + "/fonts"));

	const images = gulp.src(config.root.src + "/client/img/**/*")
		.pipe(watch(config.root.src + "/client/img/**/*"))
		.pipe(gulp.dest(config.root.dest + "/img"));

	return mergeStream(fonts, images);
};

gulp.task("copy", copyTask);
module.exports = copyTask;
