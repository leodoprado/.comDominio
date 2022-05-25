const express = require('express')
const routes = require('./routes');
const db = require('@database/db')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Declarando rotas
const homeRoute = require('./routes');

// View engine
app.set("views", "./src/view");
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static(path.join("./src/public")))

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', homeRoute)

module.exports = app;