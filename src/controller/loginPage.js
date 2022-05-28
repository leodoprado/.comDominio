const express = require("express")
const router = express.Router()
const UserAuth = require("@model/loginModel")
const bcrypt = require('bcryptjs');

router.get('/login', (req, res) => {
    res.render("home/login")
})

router.post('/authenticate', (req, res) => {
    var nivelAcesso = req.body.nivelAcesso;
    var idUser = req.body.login;
    var senha = req.body.senha;

    UserAuth.findOne({idUser: idUser}).then(user => {
        if(user != undefined) {
            var correct = bcrypt.compareSync(senha, user.senha);
            if(correct){
                req.session.user = {
                    id: user.id,
                    idUser: user.idUser
                }
                res.redirect("/login/adm/perfil")
            }else{
                res.redirect("/login");
            }
        } else {
            res.redirect("/login");
        }
    })
})

router.get('/create', (req, res) => {
    res.render("home/create")
})

router.post('/create/user', (req, res) => {
    var nivelAcesso = req.body.nivelAcesso;
    var idUser = req.body.login;
    var senha = req.body.senha;

    UserAuth.findOne({where:{idUser: idUser}}).then(user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt)

            UserAuth.create({
                nivelAcesso: nivelAcesso,
                idUser: idUser,
                senha: hash
            }).then(() => {
                res.redirect("/login")
            }).catch((err) => {
                res.redirect("/login")
            });
        } else {
            res.redirect("/create");
        }
    })
})

module.exports = router;