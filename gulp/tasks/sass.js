"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const config = require("../config");

const sassTask = (cb) => {
	return gulp.src(config.root.src + "/client/sass/**/*.scss")
		.pipe(watch(config.root.src + "/client/sass/**/*.scss")
			.on("change", () => {
				console.log("Compiling SASS...");
			}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: "compressed"
		}))
		.on("error", function(error) {
			console.error(error);
			this.emit("end");
		})
		.pipe(autoprefixer("last 2 versions", "ie 9"))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(config.root.dest + "/css"));
};

gulp.task("sass", sassTask);
module.exports = sassTask;
