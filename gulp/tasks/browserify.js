"use strict";

const watchify = require("watchify");
const browserify = require("browserify");
const babelify = require("babelify");
const gulp = require("gulp");
const vinylSourceStream = require("vinyl-source-stream");
const vinylBuffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");

const config = require("../config");

const options = Object.assign({}, watchify.args, {
	entries: [config.root.src + "/client/js/app.js"],
	debug: true
});

const browserifyTask = (cb) => {
	return build.bundle()
		.on("error", (error) => {
			console.error(error.message);
		})
		.pipe(vinylSourceStream("app.js"))
		.pipe(vinylBuffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(config.root.dest + "/js"));
};

const build = watchify(browserify(options))
	.transform("babelify", {
		presets: ["es2015"]
	})
	.on("update", browserifyTask)
	.on("log", console.log);


gulp.task("browserify", browserifyTask);
