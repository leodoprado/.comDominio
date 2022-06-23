const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");
const Financeiro = require('@model/financeiroModel')

router.get('/login/administrador/financeiro', (req, res) => {
    res.render("log/adm/financeiroAdministrador")
})

router.get('/login/administrador/financeiro/registro', (req, res) => {
    res.render("log/adm/financeiroUsuarioCadastro")
})

router.post('/login/administrador/financeiro/registro', (req, res) => {
    idUsuario = req.body.idUsuario;
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/financeiro/registro/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/financeiro/registro/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/financeiroCadastroAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/financeiro/registro/success', (req, res) => {
    var idMorador = req.body.idMorador;
    var nome = req.body.nome;
    var numApto = req.body.numApto;
    var andar = req.body.andar;
    var posicao = req.body.posicao;
    var garagem = req.body.garagem;
    var telefone = req.body.telefone

    Moradia.create({
        idMorador: idMorador,
        nome: nome,
        numApto: numApto,
        andar: andar,
        posicao: posicao,
        garagem: garagem,
        telefone: telefone
    }).then(() => {
        res.redirect("/login/administrador/moradias")
    })
})

router.get('/login/administrador/financeiro/delete', (req, res) => {
    res.render("log/adm/financeiroDeleteAdministrador")
})


module.exports = router;