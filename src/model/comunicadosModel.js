const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Comunicados = connection.define('comunicados', {
    idComunicados: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo "Título" não pode ser vazio!'
            },
            max: {
                msg: 'O campo "Título" não pode ter mais de 30 caracteres!'
            }
        }
    },
    dataEnvio: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo "data de Envio" não pode ser vazio!'
            }
        }
    },
    assunto: {
        type: Sequelize.STRING(55),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo "Assunto" não pode ser vazio!'
            },
            max: {
                msg: 'O campo "Assunto" não pode ter mais de 55 caracteres!'
            }
        }
    },
    texto: {
        type: Sequelize.STRING(800),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo "Texto" não pode ser vazio!'
            },
            max: {
                msg: 'O campo "Texto" não pode ter mais de 800 caracteres!'
            }
        }
    }
})

// Sincronizando model com banco de dados
Comunicados.sync({force: false});

module.exports = Comunicados;