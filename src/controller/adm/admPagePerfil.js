const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");

router.get('/login/administrador/perfil', accessValidation ,(req, res) => {
    res.render("log/adm/perfilAdministrador")
})

module.exports = router;