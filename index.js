(async () => {

    const connection = require('@database/db');
    const usuarioModel = require('./model/usuarioModel');
    const comunicadosModel = require('./model/comunicadosModel');
    await connection.sync();

})();