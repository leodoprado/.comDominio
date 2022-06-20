const express = require("express")
const router = express.Router()

router.get('/login/administrador/comunicados', (req, res) => {
    res.render("log/adm/comunicadosAdministrador")
})
router.get('/login/administrador/comunicados/cadastro', (req, res) => {
    res.render("log/adm/comunicadosCreateAdministrador")
})

module.exports = router;