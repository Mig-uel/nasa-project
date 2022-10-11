/* ---- Models ---- */
const {
  getAllLaunches,
  existsLaunchWithId,
  abortLaunchById,
  scheduleNewLaunch,
} = require('../../models/launches.model')

/* ---- Get All Launches ---- */
async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches())
}

/* ---- Post New Launch ---- */
async function httpAddNewLaunch(req, res) {
  const launch = req.body

  /* ---- Validation ---- */
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target)
    return res.status(400).json({ error: 'All fields required!' })

  /* Convert Text Date to JS Date ---- */
  launch.launchDate = new Date(launch.launchDate)

  /* ---- Validate Date ---- */
  if (isNaN(launch.launchDate))
    return res.status(400).json({ error: 'Invalid Date!' })

  await scheduleNewLaunch(launch)
  return res.status(201).json(launch)
}

/* ---- Delete a Launch ---- */
async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id)

  // if launch does not exist
  const existsLaunch = await existsLaunchWithId(launchId)

  if (!existsLaunch) return res.status(404).json({ error: 'Launch not found!' })

  const aborted = await abortLaunchById(launchId)
  if (!aborted) {
    return res.status(400).json({ error: 'Launch not aborted!' })
  }

  return res.status(200).json({ ok: true })
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch }
