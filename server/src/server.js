const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')

require('dotenv').config()

const { loadPlanetsData } = require('./models/planets.model')

/* ---- Port ---- */
const PORT = 8000

/* ---- MongoDB ---- */

const MONGO_URI = `mongodb+srv://nasa-api:${process.env.MONGO_PWD}@nasacluster.bnylmtp.mongodb.net/nasa?retryWrites=true&w=majority`

/* ---- Initialize server ---- */
const server = http.createServer(app)

/* ---- Mongoose Connection Alternative

mongoose.connection.once('open', () => console.log('MongoDB Connection Ready!'))
mongoose.connection.on('error', (error) => console.error(error))

---- */

async function startServer() {
  await mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error))

  await loadPlanetsData()
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))
}

startServer()
