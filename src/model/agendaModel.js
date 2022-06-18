const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Agenda = connection.define('agendamento', {
    idAgendamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataInicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataFim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Processando"
    }
})

// Sincronizando o model com o banco de dados
// Agenda.sync({force: false});

module.exports = Agenda;