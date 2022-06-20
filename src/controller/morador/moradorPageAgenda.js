const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/morador/agenda', (req, res) => {
    res.render("log/morador/agendaMorador")
})

module.exports = router;