const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const admPagePerfilController = require('./controller/adm/admPagePerfil');
const admPageGerencialController = require('@controller/adm/admPageGerencial')
const admPageCreateController = require('@controller/adm/admPageCreate')
const moradorPagePerfilController = require('@controller/morador/moradorPagePerfil')
const create = require('@controller/loginPage')

router.get('/', homePageController);
router.get('/login', loginPageController);
router.post('/authenticate', loginPageController);
router.get('/logout', loginPageController);
router.get('/create', create);
router.post('/create/user', create);
router.get('/login/morador/perfil/:id', moradorPagePerfilController);
router.post('/login/morador/perfil/:id', moradorPagePerfilController)
router.get('/login/administrador/perfil/:id', admPagePerfilController);
router.post('/login/administrador/perfil/:id', admPagePerfilController)
router.get('/login/administrador/gerencial', admPageGerencialController);
router.get('/login/administrador/gerencial/create', admPageCreateController);
router.post('/login/administrador/gerencial/create/success', admPageCreateController);

module.exports = router;
