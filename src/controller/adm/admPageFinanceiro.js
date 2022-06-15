const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/administrador/financeiro', (req, res) => {
    res.render("log/adm/financeiroAdministrador")
})

module.exports = router;