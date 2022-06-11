const express = require("express")
const router = express.Router()

router.get('/login/administrador/comunicados', (req, res) => {
    res.render("log/adm/comunicadosAdministrador")
})

module.exports = router;