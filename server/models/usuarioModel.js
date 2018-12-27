const db = require('../config/mysq');


const login = (usuario) => {

    return new Promise((resolve, reject) => {

        db.connection.query('SELECT * FROM usuario WHERE correo = ? AND clave = ?', [usuario.user, usuario.pass], (err, data) => {

            if(err) reject(err);
            
            resolve(data);
            
        });
    });

}


const traerUsuarios = () =>{

    return new Promise((resolve, reject) => {

        db.connection.query('SELECT * FROM usuario', (err, data) => {

            if(err) reject(err);
            
            resolve(data);
            
        });
    });
}


module.exports = {
    traerUsuarios,
    login
}


