const usuarioModel = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');


const login = (req, res) => {

    const usuario = {
        user: req.body.user,
        pass: req.body.pass
    }

    usuarioModel.login(usuario)
        .then(data => {
            if (data.length == 0) {

                return res.json({
                    ok: false,
                    err: "Usuario o contraseña incorrectos"
                });
            }

            let token = jwt.sign({ usuario: data[0] }, process.env.SEED_JWT, { expiresIn: '30d' });

            res.json({
                ok: true,
                token,
                data
            });
        })
        .catch(err => {
            res.json({
                ok: false,
                err
            })

        });
}


const traerUsuarios = (req, res) => {

    usuarioModel.traerUsuarios()
        .then(data => {
            res.json({
                ok: true,
                data
            });
        })
        .catch(err => {
            res.json({
                ok: false,
                err
            })

        });
}

const fileUpload = (req, res) => {

    res.json({
        ok: true,
        data: req.filename
    });

}




module.exports = {
    traerUsuarios,
    login,
    fileUpload
}