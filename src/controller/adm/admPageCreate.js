const express = require("express")
const router = express.Router()

router.get('/login/administrador/gerencial/create', (req, res) => {
    res.render("log/adm/createAdministrador")
})

module.exports = router;