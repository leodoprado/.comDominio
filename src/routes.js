const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const admPagePerfilController = require('./controller/adm/admPagePerfil');
const moradorPagePerfilController = require('@controller/morador/moradorPagePerfil')
const create = require('@controller/loginPage')

router.get('/', homePageController);
router.get('/login', loginPageController);
router.post('/authenticate', loginPageController)
router.get('/login/morador/perfil', moradorPagePerfilController);
router.get('/login/administrador/perfil', admPagePerfilController);
router.get('/create', create);
router.post('/create/user', create);

module.exports = router;
