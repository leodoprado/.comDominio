const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');

router.get('/', homePageController);
router.get('/login', loginPageController);

module.exports = router;
