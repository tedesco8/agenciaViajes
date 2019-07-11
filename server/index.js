//importar express
const express = require('express');
const routes = require('./routes');

//configuracion express
const app = express();
//cargar las rutas
app.use('/', routes());

app.listen(3000);