const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const admPagePerfilController = require('./controller/adm/admPagePerfil');
const create = require('@controller/loginPage')

router.get('/', homePageController);
router.get('/login', loginPageController);
router.post('/authenticate', loginPageController)
router.get('/login/adm/perfil', admPagePerfilController);
router.get('/create', create);
router.post('/create/user', create);

module.exports = router;
