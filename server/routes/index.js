const express = require('express');
const router = express.Router();

//Controladores
const controllersNosotros = require('../controllers/nosotrosControllers');
const controllerHome = require('../controllers/homeControllers');
const controllerViajes = require('../controllers/viajesControllers');
const controllerTestimoniales = require('../controllers/testimonialesControllers');

module.exports = function() {
router.get('/', controllerHome.consultasHomePage);
router.get('/nosotros', controllersNosotros.infoNosotros);
router.get('/viajes', controllerViajes.mostrarViajes);
router.get('/viajes/:id', controllerViajes.mostrarViaje);
router.get('/testimoniales', controllerTestimoniales.mostrarTestimoniales);
router.post('/testimoniales', controllerTestimoniales.agregarTestimonial)

return router;

}