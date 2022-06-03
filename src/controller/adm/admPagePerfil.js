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

router.post('/login/administrador/perfil/save', accessValidation, (req, res) => {
    // definindo as variaveis que vão ser pegas do formulário
    var nome = req.body.nome;
    var datanascimento = req.body.datanascimento;
    var cpf = req.body.cpf;
    var rg = req.body.rg;
    var estadocivil = req.body.estadocivil;
    var sexo = req.body.sexo;
    var pais = req.body.pais;
    var cidadenatal = req.body.cidadenatal;
    var estado = req.body.estado;

    var email = req.body.email;
    var emailcomplementar = req.body.email;
    var telefone1 = req.body.telefone1;
    var telefone2 = req.body.telefone2;
})

module.exports = router;