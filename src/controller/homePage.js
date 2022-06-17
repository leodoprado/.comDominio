const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render("home/principal")
})

router.get('/central-de-ajuda', (req, res) => {
    res.render("home/centraldeajuda")
})

router.get('/assinatura-do-software', (req, res) => {
    res.render("home/assinaturadosoftware")
})

module.exports = router;