const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/starships', controller.getStarships)
router.get('/planets', controller.getPlanetPreview)
router.get('/starship/:id', controller.getStarshipOne)
router.get('/planet/:id', controller.getPlanetOne)
router.get('/pilotfromplanet/:id', controller.getPilotsFromPlanet)

module.exports = router
