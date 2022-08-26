/* ---- Planets Model ---- */
const planets = require('../../models/planets.model')

/* ---- Controllers ---- */
function getAllPlanets(req, res) {
  return res.status(200).json(planets)
}

module.exports = { getAllPlanets }
