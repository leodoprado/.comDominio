const Sequelize = require('sequelize');
const connection = require("@database/db");

const UserDadosPessoais = connection.define('user-dadospessoais', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datanascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidadenatal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

// UserDadosPessoais.sync({force: false});

module.exports = UserDadosPessoais