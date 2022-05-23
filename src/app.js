const express = require('express')
const routes = require('./routes');
const db = require('@database/db')
const app = express();
const path = require('path');

// View engine
app.set('view', path.join(__dirname, 'view'))
app.set('view engine', 'ejs');

app.use('/', routes);

module.exports = app;