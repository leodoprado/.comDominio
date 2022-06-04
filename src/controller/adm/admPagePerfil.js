const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const PerfilUser = require("@model/perfilModel");

router.get('/login/administrador/perfil/:id', accessValidation ,(req, res) => {
    const session = req.session.user

    id = req.params.id;
    res.cookie('id', id, {expire: new Date()+10*60*1000})

    PerfilUser.findOne({where: {id: id, idUser: session.idUser,  nivelAcesso: session.nivelAcesso}}).then(function(result){
        if(!result) {
            res.redirect('/login')
        } else {
            res.render('log/adm/perfilAdministrador', { result: result})
        }
    })
});

router.post('/login/administrador/perfil/:id', (req, res) => {
    /*const nome = req.body.nome

    PerfilUser.create (
        { nome },
        {
            where: { id: req.params.id },
        }
    ).then(() => {
        res.redirect("/login/administrador/perfil")
    })*/

    id = req.cookies.id;
    nome = req.body.nome;

    if(nome !== ''){
        PerfilUser.update({
            nome: nome
        },
        {
            where: {id : id}
        });
        res.clearCookie('id');
        res.redirect('/login/administrador/perfil');
    } else {
        res.render('log/adm/perfilAdministrador', { result : req.body})
    }
})

module.exports = router;