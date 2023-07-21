const { Router } = require("express");
const router = Router();
const { routeGetAllPok } = require("../controllers/getAllPok");
const { routeGetPokByName } = require("../controllers/getPokByName");
const { routeGetPokByid } = require('../controllers/getPokById')
const { routePostPok } = require('../controllers/postPok')


router.get('/', routeGetAllPok)
router.get('/name', routeGetPokByName)
router.get('/:id', routeGetPokByid)
router.post('/', routePostPok)


module.exports = router;
