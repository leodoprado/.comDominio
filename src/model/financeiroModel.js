const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Financeiro = connection.define('financeiro', {
    numeroContrato: {
        type: Sequelize.DOUBLE,
        primaryKey: true,
        allowNull: false
    },
    tempoContrato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'A pagar'
    }
})

// Sincronizando o model com o banco de dados
// Financeiro.sync({force: false});

module.exports = Financeiro;