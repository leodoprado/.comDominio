const express = require("express")
const router = express.Router()

router.get('/login/morador/perfil', (req, res) => {
    res.render("log/morador/perfil")
})

module.exports = router;