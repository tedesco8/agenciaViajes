const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viajes')

module.exports = function() {
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
});

router.get('/viajes', (req, res) => {
   Viaje.findAll()
    .then(viajes => res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    }))
    .catch(error => console.log(error))
});

router.get('/viajes/:id', (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error));
});

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

router.post('/testimoniales', (req, res) => {
    //validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //revisar por errores
    if(errores.length > 0) {
        //muestra la vista con errores
    } else {
        //almacenamos en la BD
    }
})

return router;

}