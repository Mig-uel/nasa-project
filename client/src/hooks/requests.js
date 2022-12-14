/* ---- API URL ---- */
const API_URL = 'http://localhost:8000/v1'

async function httpGetPlanets() {
  // Load planets and return as JSON.

  const res = await fetch(`${API_URL}/api/planets`)
  return await res.json()
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const res = await fetch(`${API_URL}/api/launches`)
  const json = await res.json()

  return json.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  // Submit given launch data to launch system.

  try {
    return await fetch(`${API_URL}/api/launches`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    })
  } catch (error) {
    return { ok: false }
  }
}

async function httpAbortLaunch(id) {
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/api/launches/${id}`, {
      method: 'PATCH',
    })
  } catch (error) {
    return { ok: false }
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
