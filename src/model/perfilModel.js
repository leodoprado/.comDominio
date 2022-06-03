const Sequelize = require("sequelize");
const connection = require("@database/db");

const PerfilUser = connection.define('perfil-user', {
    nivelAcesso:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idUser:{
        type: Sequelize.INTEGER,
        allowNull: false
    }, senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    datanascimento: {
        type: Sequelize.DATE,
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sexo: {
        type: Sequelize.CHAR,
        allowNull: true
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cidadenatal: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emailcomplementar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone1: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    telefone2: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

// Sincronizando o model com o banco de dados
// PerfilUser.sync({force: false});

module.exports = PerfilUser;