const Sequelize = require ('sequelize');
const connection = require('@database/db');
const sequelize = require('sequelize');

const Comunicados = connection.define('comunicados', {
    idComunicados: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    dataEnvio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    assunto: {
        type: Sequelize.STRING(55),
        allowNull: false
    },
    texto: {
        type: Sequelize.STRING(800),
        allowNull: false
    }
})

module.exports = Comunicados;