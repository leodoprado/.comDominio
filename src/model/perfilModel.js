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
        allowNull: false,
        defaultValue: "-"
    },
    datanascimento: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "00/00/0000"
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "000-000-000.00"
    },
    rg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: "0000000000"
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    cidadenatal: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "--"
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    emailcomplementar: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    telefone1: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "(00)00000-0000"
    }, 
    telefone2: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "(00)00000-0000"
    }
})

// Sincronizando o model com o banco de dados
 PerfilUser.sync({force: false});

module.exports = PerfilUser;