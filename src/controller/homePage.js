const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render("home/principal")
})

router.get('/central-de-ajuda', (req, res) => {
    res.render("home/centraldeajuda")
})

module.exports = router;