"use strict";

const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
	content: String,
	timestamp: Date
});
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;