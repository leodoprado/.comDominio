const express = require("express")
const router = express.Router()

router.get('/login/adm/perfil', (req, res) => {
    res.render("log/adm/perfil")
})

module.exports = router;