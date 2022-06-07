const express = require("express")
const router = express.Router()

router.get('/login/administrador/gerencial', (req, res) => {
    res.render("log/adm/gerencialAdministrador")
})

module.exports = router;