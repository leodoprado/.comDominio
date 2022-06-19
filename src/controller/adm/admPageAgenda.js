const express = require("express")
const router = express.Router()
const Agenda = require("@model/agendaModel");

router.get('/login/administrador/agenda', (req, res) => {
    res.render("log/adm/agendaAdministrador")
})

router.get('/login/administrador/agenda/agendar', (req, res) => {
    res.render("log/adm/agendarAdministrador")
})

router.post('/login/administrador/agenda/agendar/sucess', (req, res) => {
    var titulo = req.body.titulo;
    var assunto = req.body.assunto;
    var dataInicio = req.body.dataInicio;
    var horarioInicio = req.body.horarioInicio;
    var dataFim = req.body.dataFim;
    var horarioFim = req.body.horarioFim;

        Agenda.create({
            titulo: titulo,
            assunto: assunto,
            dataInicio: dataInicio,
            horarioInicio: horarioInicio,
            dataFim: dataFim,
            horarioFim: horarioFim
        }).then(() => {
            res.redirect("/login/administrador/agenda")
        }).catch((err) => {
            res.redirect("/login/administrador/agenda/agendar")
        });
})

router.get('/login/administrador/agenda/pedidos', (req, res) => {
    res.render("log/adm/pedidosAgendaAdministrador")
})

router.post('/login/administrador/agenda/pedidos', (req, res) => {
    idAgendamento = req.body.idAgendamento
    Agenda.findOne({where:{idAgendamento: idAgendamento}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/gerencial/delete/${id.idAgendamento}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/agenda/pedidos/:idAgendamento', (req, res) => {
    Agenda.findOne({where: {idAgendamento: idAgendamento}}).then(function(dados){
        if(!dados) {
            res.redirect(`/login/Administrador/gerencial/delete`)
        } else {
            res.render('log/adm/dadosDeleteAdministrador', { dados: dados})
        }
    })
})

module.exports = router;