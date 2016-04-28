"use strict";

const gulp = require("gulp");
const mergeStream = require("merge-stream");
const watch = require("gulp-watch");
const config = require("../config");

const copyTask = (cb) => {
	const html = gulp.src(config.root.src + "/client/**/*.html")
		.pipe(watch(config.root.src + "/client/**/*.html"))
		.pipe(gulp.dest(config.root.dist + "/"));

	const fonts = gulp.src(config.root.src + "/client/fonts/**/*")
		.pipe(watch(config.root.src + "/client/fonts/**/*"))
		.pipe(gulp.dest(config.root.dist + "/fonts"));

	const images = gulp.src(config.root.src + "/client/img/**/*")
		.pipe(watch(config.root.src + "/client/img/**/*"))
		.pipe(gulp.dest(config.root.dist + "/img"));

	const resources = gulp.src(config.root.src + "/client/assets/**/*")
		.pipe(watch(config.root.src + "/client/assets/**/*"))
		.pipe(gulp.dest(config.root.dist + "/assets"));

	return mergeStream(html, fonts, images, resources);
};

gulp.task("copy", copyTask);
module.exports = copyTask;
