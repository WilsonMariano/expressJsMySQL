const express = require('express');
const usuarioCtrl = require('../controllers/usuarioCtrl');
const authMiddleware = require('../middlewares/authorization');
const fileUploadMiddleWare = require('../middlewares/fileUpload');

const app = express();


app.get('/traerTodo', authMiddleware.validarToken, usuarioCtrl.traerUsuarios);
app.post('/login', usuarioCtrl.login);
app.post('/fileupload', fileUploadMiddleWare, usuarioCtrl.fileUpload);


module.exports = app;