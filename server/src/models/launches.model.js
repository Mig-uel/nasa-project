const launches = new Map()

let latestFlightNumber = 100

/* ---- Launch Model ---- */
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

/* ---- Find Existing Launch ---- */
function existsLaunchWithId(launchId) {
  return launches.has(launchId)
}

/* ---- Get All Launches ---- */
function getAllLaunches() {
  // convert data to array for controller consumption
  return Array.from(launches.values())
}

/* ---- Add New Launch ---- */
function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ['ZTM', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  )
}

/* ---- Abort/Delete a Launch ---- */
function abortLaunchById(launchId) {
  const aborted = launches.get(launchId)

  aborted.upcoming = false
  aborted.success = false

  return aborted
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
}
