"use strict";
const path = require("path");
const Router = require("express").Router();

Router.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname + "/../../client/index.html"));
});

module.exports = Router;
