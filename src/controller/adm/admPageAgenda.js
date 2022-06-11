const express = require("express")
const router = express.Router()

router.get('/login/administrador/agenda', (req, res) => {
    res.render("log/adm/agendaAdministrador")
})

module.exports = router;