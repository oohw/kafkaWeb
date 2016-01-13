"use strict";

const config = require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(config.database);

app.use(express.static(__dirname + "/../../dist"));
app.use(bodyParser.json());
app.use(require("./controllers/todos"));
app.use(require("./controllers/main"));

app.listen(config.port);
