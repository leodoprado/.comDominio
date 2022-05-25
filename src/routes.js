const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');

router.get('/', homePageController);

module.exports = router;
