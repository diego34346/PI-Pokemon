const { Router } = require('express');
const routesPokemon = require('./routesPokemon');
const routesType = require('./routesType');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", routesPokemon);  
router.use("/types", routesType); 

module.exports = router;
