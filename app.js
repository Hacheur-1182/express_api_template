const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', indexRouter);

module.exports = app;
