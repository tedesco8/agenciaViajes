//importar express
const express = require('express');
const routes = require('./routes');
const path = require('path');

//configuracion express
const app = express();
//habilitar pug
app.set('view engine', 'pug');

//anadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar las rutas
app.use('/', routes());

app.listen(3000);