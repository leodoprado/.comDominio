const express = require("express");
const router = express.Router();
const UserAuth = require("@model/perfilModel");
const bcrypt = require('bcryptjs');

router.get('/login/administrador/gerencial/create', (req, res) => {
    res.render("log/adm/createAdministrador")
})

router.post('/login/administrador/gerencial/create/success', (req, res) => {
    var nome = req.body.nome;
    var datanascimento = req.body.datanascimento
    var cpf = req.body.cpf;
    var email = req.body.email;
    var telefone1 = req.body.telefone1;
    var nivelAcesso = req.body.nivelAcesso;
    var idUser = req.body.idUser;
    var senha = req.body.senha;

    UserAuth.findOne({where:{idUser: idUser}}).then(user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt)

            UserAuth.create({
                nome: nome,
                datanascimento: datanascimento,
                cpf: cpf,
                email: email,
                telefone1: telefone1,
                nivelAcesso: nivelAcesso,
                idUser: idUser,
                senha: hash
            }).then(() => {
                res.redirect("/login/administrador/gerencial/create")
            }).catch((err) => {
                res.redirect("/login/administrador/gerencial/create")
            });
        } else {
            res.redirect("/login/administrador/perfil/:id");
        }
    })
})

module.exports = router;