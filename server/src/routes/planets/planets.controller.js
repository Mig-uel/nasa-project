/* ---- Planets Model ---- */
const { getAllPlanets } = require('../../models/planets.model')

/* ---- Controllers ---- */
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets())
}

module.exports = { httpGetAllPlanets }
