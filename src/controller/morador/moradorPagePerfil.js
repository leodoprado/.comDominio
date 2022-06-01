const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");

router.get('/login/morador/perfil', accessValidation ,(req, res) => {
    res.render("log/morador/perfil")
})

module.exports = router;