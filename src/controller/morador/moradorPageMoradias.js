const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/morador/moradias', (req, res) => {
    res.render("log/morador/moradiasMorador")
})

module.exports = router;