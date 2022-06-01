const express = require("express")
const router = express.Router()
const dadosConta = require("@model/loginModel");
const accessValidation = require("@middleware/accessValidation");

router.get('/login/administrador/perfil', accessValidation ,(req, res) => {
    dadosConta.findAll({
        attributes: ['idUser', "nivelAcesso"]
    }).then(function(dados){
        res.render("log/adm/perfilAdministrador", {dados: dados})
    });
});

module.exports = router;