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
const moradorPageGerencialController = require('@controller/morador/moradorPageGerencial');
const moradorPageMoradiasController = require('@controller/morador/moradorPageMoradias');
const moradorPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const moradorPageComunicadosController = require('@controller/adm/admPageComunicados')
const moradorPageAgendaController = require('@controller/morador/moradorPageAgenda');
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
router.post('/login/morador/perfil/:idUsuario', moradorPagePerfilController);
router.get('/login/morador/gerencial', moradorPageGerencialController);
router.get('/login/morador/moradias', moradorPageMoradiasController);
router.get('/login/morador/financeiro', moradorPageFinanceiroController)
router.get('/login/morador/comunicados', moradorPageComunicadosController);
router.get('/login/morador/agenda', moradorPageAgendaController);
router.get('/login/morador/agenda', moradorPageAgendaController);
router.get('/login/morador/agenda/agendar' ,moradorPageAgendaController);
router.post('/login/morador/agenda/agendar' ,moradorPageAgendaController);
router.get('/login/morador/agenda/agendar/:idUsuario', moradorPageAgendaController);
router.post('/login/morador/agenda/agendar/success' ,moradorPageAgendaController);
// Rotas Administrador
router.get('/login/administrador/perfil/:idUsuario', admPagePerfilController);
router.post('/login/administrador/perfil/:idUsuario', admPagePerfilController)
router.get('/login/administrador/gerencial', admPageGerencialController);
router.get('/login/administrador/gerencial/create', admPageCreateController);
router.post('/login/administrador/gerencial/create/success', admPageCreateController);
router.get('/login/administrador/gerencial/delete', admPageDeleteController);
router.post('/login/administrador/gerencial/delete', admPageDeleteController);
router.get('/login/administrador/gerencial/delete/:idUsuario', admPageDeleteController);
router.post('/login/administrador/gerencial/delete/:idUsuario', admPageDeleteController);
router.get('/login/administrador/gerencial/update', admPageGerencialController);
router.post('/login/administrador/gerencial/update', admPageGerencialController);
router.get('/login/administrador/gerencial/update/:idUsuario', admPageGerencialController);
router.post('/login/administrador/gerencial/update/:idUsuario', admPageGerencialController);
router.get('/login/administrador/financeiro', admPageFinanceiroController);
router.get('/login/administrador/financeiro/registro', admPageFinanceiroController);
router.post('/login/administrador/financeiro/registro', admPageFinanceiroController);
router.get('/login/administrador/financeiro/registro/:idUsuario', admPageFinanceiroController);
router.post('/login/administrador/financeiro/registro/success', admPageFinanceiroController);
router.get('/login/administrador/financeiro/delete', admPageFinanceiroController)
router.post('/login/administrador/financeiro/delete', admPageFinanceiroController)
router.get('/login/administrador/financeiro/delete/:numeroContrato', admPageFinanceiroController)
router.post('/login/administrador/financeiro/delete/:numeroContrato', admPageFinanceiroController)
router.get('/login/administrador/financeiro/atualizar', admPageFinanceiroController);
router.post('/login/administrador/financeiro/atualizar', admPageFinanceiroController);
router.get('/login/administrador/financeiro/atualizar/:numeroContrato', admPageFinanceiroController);
router.post('/login/administrador/financeiro/atualizar/:numeroContrato', admPageFinanceiroController);


router.get('/login/administrador/moradias', admPageMoradiasController);
router.get('/login/administrador/moradias/vincular', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular', admPageVincularMoradiasController);
router.get('/login/administrador/moradias/vincular/:idUsuario', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular/:idUsuario', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular/success', admPageVincularMoradiasController);
router.get('/login/administrador/moradias/alterar', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/alterar', admPageVincularMoradiasController);
router.get('/login/administrador/moradias/alterar/:numApto', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/alterar/:numApto', admPageVincularMoradiasController);
router.get('/login/administrador/moradias/apagar', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/apagar', admPageVincularMoradiasController);
router.get('/login/administrador/moradias/apagar/:numApto', admPageVincularMoradiasController);
router.post('/login/administrador/moradias/apagar/success/:numApto', admPageVincularMoradiasController);
// rotas de moradias
router.get('/login/administrador/comunicados', admPageComunicadosController);
router.get('/login/administrador/comunicados/cadastro', admPageComunicadosController);
router.post('/login/administrador/comunicados/cadastro', admPageComunicadosController);
router.get('/login/administrador/comunicados/delete', admPageComunicadosController);
router.post('/login/administrador/comunicados/delete', admPageComunicadosController);
router.get('/login/administrador/comunicados/delete/:idComunicado', admPageComunicadosController);
router.post('/login/administrador/comunicados/delete/:idComunicado', admPageComunicadosController);
router.get('/login/administrador/agenda', admPageAgendaController);
router.get('/login/administrador/agenda/agendar', admPageAgendaController);
router.post('/login/administrador/agenda/agendar' ,admPageAgendaController);
router.get('/login/administrador/agenda/agendar/:idUsuario', admPageAgendaController);
router.post('/login/administrador/agenda/agendar/success' ,admPageAgendaController);
router.get('/login/administrador/agenda/pedidos', admPageAgendaController);
router.post('/login/administrador/agenda/pedidos', admPageAgendaController);
router.get('/login/administrador/agenda/pedidos/:idAgendamento', admPageAgendaController);
router.post('/login/administrador/agenda/pedidos/:idAgendamento', admPageAgendaController);
router.get('/login/administrador/agenda/excluir', admPageAgendaController);
router.post('/login/administrador/agenda/excluir', admPageAgendaController);
router.get('/login/administrador/agenda/excluir/:idAgendamento', admPageAgendaController);
router.post('/login/administrador/agenda/excluir/:idAgendamento', admPageAgendaController);

module.exports = router;
