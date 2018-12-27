const express = require('express');
const usuarioCtrl = require('../controllers/usuarioCtrl');
const authMiddleware = require('../middlewares/authorization');

const app = express();


app.get('/traerTodo', authMiddleware.validarToken, usuarioCtrl.traerUsuarios);
app.post('/login', usuarioCtrl.login);

module.exports = app;