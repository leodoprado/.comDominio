const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const admPagePerfilController = require('./controller/adm/admPagePerfil');

router.get('/', homePageController);
router.get('/login', loginPageController);
router.get('/login/adm/perfil', admPagePerfilController);

module.exports = router;
