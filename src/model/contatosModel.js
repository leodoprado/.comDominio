const Sequelize = require('sequelize');
const connection = require("@database/db");

const UserContatos = connection.define('user-contatos', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailcomplementar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone1: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    telefone2: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

//UserContatos.sync({force: false});

module.exports = UserContatos