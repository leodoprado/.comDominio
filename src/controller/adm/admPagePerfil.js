const express = require("express")
const router = express.Router()

router.get('/login/administrador/perfil', (req, res) => {
    res.render("log/adm/perfilAdministrador")
})

module.exports = router;