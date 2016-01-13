"use strict";

const Router = require("express").Router();
const Todo = require("../models/todo");
const ErrorHandler = require("../lib/ErrorHandler");

Router.get("/todos", (req, res) => {
	Todo.find({})
		.then((todos) => {
			if (todos.length === 0) res.status(204);
			res.send(todos);
		}, ErrorHandler(req, res));
});

Router.post("/todos", (req, res) => {
	Todo.create({"content": req.body.content})
		.then((todo) => {
			res.send(todo);
		}, ErrorHandler(req, res));
});

Router.get("/todos/:id", (req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => {
			if (todo === null) res.status(204);
			res.send(todo);
		}, ErrorHandler(req, res));
});

Router.delete("/todos/:id", (req, res) => {
	Todo.findByIdAndRemove(req.params.id)
		.then((todo) => {
			res.send(todo);
		}, ErrorHandler(req, res));
});

module.exports = Router;
