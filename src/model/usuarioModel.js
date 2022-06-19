const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Usuario = connection.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    senha: {
        type: Sequelize.STRING(20),
        allowNull: false,
        len: {
            args: [5, 20],
            msg: 'a Senha precisa ter entre 5 a 20 caracteres!'
        }
    },
    nivelAcesso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'o campo "Nome" não pode ser vazio!'
            },
            max: {
                msg: 'o campo "Nome" não pode ter mais de 40 caracteres!'
            }
        }
    },
    datanascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: {
                msg: 'O campo "Data Nascimento" não pode ser vazio!'
            }
        }
    },
    cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'o campo "CPF" não pode ser vazio!'
            },
        }
    },
    rg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: "0"
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
        allowNull: false
    }, 
    telefone2: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "(00)00000-0000"
    }
})

// Sincronizando model com banco de dados
Usuario.sync({force: false});

module.exports = Usuario;