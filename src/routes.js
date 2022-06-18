const express = require('express');
const router = express.Router();
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const esqueceusenhaPageController = require('@controller/loginPage');
const admPagePerfilController = require('./controller/adm/admPagePerfil');
const admPageGerencialController = require('@controller/adm/admPageGerencial');
const admPageCreateController = require('@controller/adm/admPageCreate');
const admPageDeleteController = require('@controller/adm/admPageDelete');
const admPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const admPageMoradiasController = require('@controller/adm/admPageMoradias');
const admPageVincularMoradiasController = require('@controller/adm/admPageVincularMoradias');
const admPageComunicadosController = require('@controller/adm/admPageComunicados');
const admPageAgendaController = require('@controller/adm/admPageAgenda');
const moradorPagePerfilController = require('@controller/morador/moradorPagePerfil');
const create = require('@controller/loginPage');

router.get('/', homePageController);
router.get('/login', loginPageController);
router.post('/authenticate', loginPageController);
router.get('/logout', loginPageController);
router.get('/create', create);
router.post('/create/user', create);
router.get('/central-de-ajuda', homePageController);
router.get('/assinatura-do-software', homePageController);
router.get('/login/morador/perfil/:idUsuario', moradorPagePerfilController);
router.post('/login/morador/perfil/:idUsuario', moradorPagePerfilController)
router.get('/login/administrador/perfil/:idUsuario', admPagePerfilController);
router.post('/login/administrador/perfil/:idUsuario', admPagePerfilController)
router.get('/login/administrador/gerencial', admPageGerencialController);
router.get('/login/administrador/gerencial/create', admPageCreateController);
router.post('/login/administrador/gerencial/create/success', admPageCreateController);
router.get('/login/administrador/gerencial/delete', admPageDeleteController);
router.post('/login/administrador/gerencial/delete', admPageDeleteController);
router.get('/login/administrador/gerencial/delete/:idUsuario', admPageDeleteController);
router.post('/login/administrador/gerencial/delete/:idUsuario', admPageDeleteController);
router.get('/login/administrador/financeiro', admPageFinanceiroController);
// router.delete gerencial
router.get('/login/administrador/moradias', admPageMoradiasController);
router.get('/login/administrador/moradias/vincular', admPageVincularMoradiasController);
// rotas de moradias
router.get('/login/administrador/comunicados', admPageComunicadosController);
// rotas de comunicados
router.get('/login/administrador/agenda', admPageAgendaController);
router.get('/login/administrador/agenda/agendar', admPageAgendaController);
router.get('/login/administrador/agenda/pedidos', admPageAgendaController);

module.exports = router;
