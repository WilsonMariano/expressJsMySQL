const db = require('../config/mysq');


const login = (usuario) => {

    return new Promise((resolve, reject) => {

        db.connection.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [usuario.user, usuario.pass], (err, data) => {

            if (err) reject(err);

            resolve(data);

        });
    });

}


const traerUsuarios = () => {

    return new Promise((resolve, reject) => {

        db.connection.query('SELECT * FROM usuarios', (err, data) => {

            if (err) reject(err);

            resolve(data);

        });
    });
}


module.exports = {
    traerUsuarios,
    login
}