const http = require('http')
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

/* ---- Port ---- */
const PORT = 8000

/* ---- Initialize server ---- */
const server = http.createServer(app)

async function startServer() {
  await loadPlanetsData()
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))
}

startServer()
