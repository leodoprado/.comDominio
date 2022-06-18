const express = require("express")
const router = express.Router()

router.get('/login/administrador/agenda', (req, res) => {
    res.render("log/adm/agendaAdministrador")
})

router.get('/login/administrador/agenda/agendar', (req, res) => {
    res.render("log/adm/agendarAdministrador")
})

module.exports = router;