const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const temperamentsRouter = require('./temperaments_route.js')
const dogsRouter = require('./dogs_route.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/temperaments', temperamentsRouter)
router.use('/dogs', dogsRouter);


// Importar todos los routers;
// Configurar los routers


module.exports = router;




