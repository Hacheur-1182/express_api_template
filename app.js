const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Import your route here
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))

// Add a reference on your route here
app.use('/', indexRouter);

module.exports = app;
