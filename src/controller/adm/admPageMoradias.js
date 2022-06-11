const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/perfilModel");

router.get('/login/administrador/moradias', (req, res) => {
    res.render("log/adm/moradiasAdministrador")
})

module.exports = router;