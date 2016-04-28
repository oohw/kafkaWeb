'use strict';

const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const gulpif = require('gulp-if');

const config = require('../config');

const options = Object.assign({}, watchify.args, {
	entries: [config.root.src + '/client/js/app.js'],
	debug: true
});

const browserifyTask = (cb) => {
	const isProduction = process.env.NODE_ENV === 'production';

	const options = Object.assign({}, watchify.args, {
		entries: [config.root.src + '/client/js/app.js'],
		debug: true
	});

	let build = browserify(options);
	if (!isProduction) {
		build = watchify(build);
	}

	build.transform('babelify', {
		presets: ['es2015'],
	})
	.on('update', browserifyTask)
	.on('log', console.log);

	return build.bundle()
		//.pipe(plumber())
		.on('error', (error) => {
			console.error(error.message);
		})
		.pipe(vinylSourceStream('app.js'))
		.pipe(vinylBuffer())
		.pipe(gulpif(isProduction, minify({
			ext: {
				src: '-debug.js',
				min: '.js',
			},
		})))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.root.dist + '/js'));
};

gulp.task('browserify', browserifyTask);
