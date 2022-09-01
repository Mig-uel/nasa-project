/* ---- Models ---- */
const {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require('../../models/launches.model')

/* ---- Get All Launches ---- */
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches())
}

/* ---- Post New Launch ---- */
function httpAddNewLaunch(req, res) {
  const launch = req.body

  /* ---- Validation ---- */
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target)
    return res.status(400).json({ error: 'All fields required!' })

  /* Convert Text Date to JS Date ---- */
  launch.launchDate = new Date(launch.launchDate)

  /* ---- Validate Date ---- */
  if (isNaN(launch.launchDate))
    return res.status(400).json({ error: 'Invalid Date!' })

  addNewLaunch(launch)
  return res.status(201).json(launch)
}

/* ---- Delete a Launch ---- */
function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id)

  // if launch does not exist
  if (!existsLaunchWithId(launchId))
    return res.status(404).json({ error: 'Launch not found!' })

  const aborted = abortLaunchById(launchId)
  return res.status(200).json(aborted)
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch }
