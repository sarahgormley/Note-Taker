//require express
const express = require('express');
//require notes
const notes = require('./notes');
//app and app.use
const app = express();

app.use('/notes', notes);

module.exports = app;