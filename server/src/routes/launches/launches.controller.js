/* ---- Models ---- */
const { getAllLaunches, addNewLaunch } = require('../../models/launches.model')

/* ---- Get All Launches ---- */
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
  const launch = req.body

  /* ---- Validation ---- */
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  )
    return res.status(400).json({ error: 'All fields required!' })

  /* Convert Text Date to JS Date ---- */
  launch.launchDate = new Date(launch.launchDate)

  /* ---- Validate Date ---- */
  if (isNaN(launch.launchDate))
    return res.status(400).json({ error: 'Invalid Date!' })

  addNewLaunch(launch)
  return res.status(201).json(launch)
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch }
