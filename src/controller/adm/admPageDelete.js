const express = require("express")
const router = express.Router()

router.get('/login/administrador/gerencial/delete', (req, res) => {
    res.render("log/adm/deleteAdministrador")
})

module.exports = router;