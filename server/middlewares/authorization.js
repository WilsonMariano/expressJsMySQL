const jwt = require('jsonwebtoken');

const validarToken = (req, res, next) => {

    let token = req.get('Authorization');

    try{
        jwt.verify(token, process.env.SEED_JWT);
        next();
    }
    catch(err){
        return res.json({
            ok: false,
            err: "Token inválido"
        });
    }    
}

module.exports = { validarToken }