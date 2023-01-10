const { Router } = require('express');
const router = Router();
const { getDbTemperaments } = require('../controllers/temperaments_controller.js')


router.get('/', getDbTemperaments); // en la ruta '/temperaments' se ejecuta esta función  


module.exports = router;

