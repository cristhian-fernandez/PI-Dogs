const { Router } = require('express');
const raceRoutes = require('./raceRoutes'); 
const temperamentRoutes = require('./temperamentRoutes'); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',raceRoutes);                     //  http://localhost:3001/api/race/
router.use('/temperaments',temperamentRoutes);       //  http://localhost:3001/api/temperament/


module.exports = router;
