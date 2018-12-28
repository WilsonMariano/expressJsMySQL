require('./config/params');

const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoute = require('./routes/usuarioRoute');

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/usuario', usuarioRoute);

app.listen(3000, (err) => {

    if (err) throw err;
    console.log('Servidor corriendo en puerto 3000');
});