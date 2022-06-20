const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/administrador/financeiro', (req, res) => {
    res.render("log/adm/financeiroAdministrador")
})

router.get('/login/administrador/financeiro/registro', (req, res) => {
    res.render("log/adm/financeiroCadastroAdministrador")
})

router.get('/login/administrador/financeiro/delete', (req, res) => {
    res.render("log/adm/financeiroDeleteAdministrador")
})


module.exports = router;