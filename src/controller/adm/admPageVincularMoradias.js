const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/perfilModel");

router.get('/login/administrador/moradias/vincular', (req, res) => {
    res.render("log/adm/vincularMoradiasAdministrador")
})

module.exports = router;