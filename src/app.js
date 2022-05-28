const express = require('express');
const routes = require('./routes');
const db = require('@database/db');
const UserAuth = require('@model/loginModel');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

// Sessions
app.use(session({
    secret: "AJSasnakAJSNAJDa3231nsdn",
    cookie: { maxAge: 432000000 }
}))

// Declarando rotas
const Routes = require('./routes');

// View engine
app.set("views", "./src/view");
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "/public")))

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', Routes)

module.exports = app;