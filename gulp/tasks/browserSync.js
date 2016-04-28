const browserSync = require("browser-sync");
const gulp = require("gulp");
const config = require("../config");

const browserSyncTask = (cb) => {
	browserSync.init(null, {
		server: config.root.dist,
		files: [
			config.root.dist + "/**/*index.html",
			config.root.dist + "/css/*.css",
			config.root.dist + "/js/*.js",
			config.root.dist + "/assets/*",
			config.root.dist + "/fonts/*",
			config.root.dist + "/tools/*.html",
			config.root.dist + "/js/tools/*.js"
		],
		browser: "google chrome",
		port: 9000
	});
};

gulp.task("browserSync", browserSyncTask);
