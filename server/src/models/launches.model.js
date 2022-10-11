const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100

/* ---- Find Existing Launch ---- */
async function existsLaunchWithId(launchId) {
  return await launchesDatabase.findOne({ flightNumber: launchId })
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort('-flightNumber')

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER
  }

  return latestLaunch.flightNumber
}

/* ---- Get All Launches ---- */
async function getAllLaunches() {
  // convert data to array for controller consumption
  const test = await launchesDatabase.find({}, { _id: 0, __v: 0 })
  return test
}

async function saveLaunch(launch) {
  const planet = await planets.findOneAndUpdate({
    keplerName: launch.target,
  })

  if (!planet) {
    throw new Error('No matching planet was found!')
  }

  await launchesDatabase.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  )
}

async function scheduleNewLaunch(launch) {
  const newFlightNumber = (await getLatestFlightNumber()) + 1

  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['Zero to Mastery', 'NASA'],
    flightNumber: newFlightNumber,
  })

  await saveLaunch(newLaunch)
}

/* ---- Abort/Delete a Launch ---- */
async function abortLaunchById(launchId) {
  const aborted = await launchesDatabase.updateOne(
    { flightNumber: launchId },
    {
      upcoming: false,
      success: false,
    }
  )

  return aborted.modifiedCount === 1
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  scheduleNewLaunch,
  abortLaunchById,
}
