const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/administrador/gerencial', (req, res) => {
    PerfilUser.findAll().then(function(moradores){
        res.render("log/adm/gerencialAdministrador", {moradores: moradores})
    })
})

module.exports = router;