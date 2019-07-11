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

//cargar carpeta estatica public
app.use(express.static('public'));

//muestra el ano actual
app.use((req, res, next) => {
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    return next();
})

//cargar las rutas
app.use('/', routes());

app.listen(3000);