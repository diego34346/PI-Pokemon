const { Router } = require("express");
const router = Router();
const { routeGetTypes } = require("../controllers/typesGet");

router.get("/", routeGetTypes)

module.exports = router;
