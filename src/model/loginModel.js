const Sequelize = require("sequelize");
const connection = require("@database/db");

const UserAuth = connection.define('user-auth', {
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
    }
})

// Sincronizando o model com o banco de dados
// UserAuth.sync({force: false});

module.exports = UserAuth;