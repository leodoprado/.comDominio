const express = require("express")
const router = express.Router()
const dadosConta = require("@model/loginModel");
const accessValidation = require("@middleware/accessValidation");

router.get('/login/administrador/perfil', accessValidation ,(req, res) => {
    const session = req.session.user
    dadosConta.findOne({where:{ idUser: session.idUser,  nivelAcesso: session.nivelAcesso }}).then(function(dados){
        res.render("log/adm/perfilAdministrador", {dados: dados})
        // Debugando
        // console.log(dados.idUser)
        // console.log(session.nivelAcesso)
    });
});

module.exports = router;