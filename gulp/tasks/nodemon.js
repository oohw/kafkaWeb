const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const config = require("../config");

const nodemonTask = (cb) => {
	nodemon({
		script: config.root.src + "/server/index.js",
		ext: "js",
		ignore: ["dist/**/*", "src/client/**/*"],
		env: {
			"NODE_ENV": "development"
		}
	});
};

gulp.task("nodemon", nodemonTask);

module.exports = nodemonTask;
