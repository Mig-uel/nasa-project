/* ---- Planets Model ---- */
const { getAllPlanets } = require('../../models/planets.model')

/* ---- Controllers ---- */
async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets())
}

module.exports = { httpGetAllPlanets }
