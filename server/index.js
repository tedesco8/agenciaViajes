//importar express
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const configs = require('./config');

// db.authenticate()
//     .then(() => console.log('DB Conectada'))
//     .catch(error => console.log(error));

//configuracion express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//anadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar carpeta estatica public
app.use(express.static('public'));

//validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//muestra el ano actual y genera la ruta
app.use((req, res, next) => {
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

//ejecutamos el bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/', routes());

app.listen(3000);