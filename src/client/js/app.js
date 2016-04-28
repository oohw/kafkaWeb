'use strict';

// ::::::::::::::::::::::::::::::::::::::::::::: imports
import $ from 'jquery';
import { ViewController } from './ViewController';

// ::::::::::::::::::::::::::::::::::::::::::::: variables
let width = window.innerWidth;
let height = window.innerHeight;

const viewController = new ViewController();

// ::::::::::::::::::::::::::::::::::::::::::::: functions

function setViewPort(_width, _height) {
	width = _width;
	height = _height;
	viewController.setViewPort(width, height);
}
function init() {
	setViewPort(window.innerWidth, window.innerHeight);
}

// ::::::::::::::::::::::::::::::::::::::::::::: events
$(document).mousemove((event) => {
});

$(document).mouseup((event) => {
});

$(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', (event) => {
});

$(window).resize(() => {
	setViewPort(window.innerWidth, window.innerHeight);
});

// ::::::::::::::::::::::::::::::::::::::::::::: initialization

$(() => {
	init();
});


/*********************************************** help

// ::::::::::::::::::::::::::::::::::::::::::::: app.js

	app.js is the main class.

	it collects user and window information,
	and fires up viewController

// ::::::::::::::::::::::::::::::::::::::::::::: viewController.js

	here, stuff happens

 ************************************************/
