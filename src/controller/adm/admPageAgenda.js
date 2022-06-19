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
    id = req.body.id
    Agenda.findOne({where:{id: id}}).then(idAgendamento => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/agenda/pedidos/${idAgendamento.id}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/agenda/pedidos/:id', (req, res) => {
    Agenda.findOne({where: {id: id}}).then(function(pedido){
        if(!pedido) {
            res.redirect(`/login/Administrador/agenda/pedidos`)
        } else {
            res.render('log/adm/pedidosAtualizarAgendaAdministrador', { pedido: pedido })
        }
    })
})

module.exports = router;