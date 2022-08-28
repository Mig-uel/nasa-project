const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

/* ---- Routers ---- */
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

/* ---- Setup Express ---- */
const app = express()

/* ---- Middleware ---- */
app.use(cors({ origin: 'http://localhost:3000' })) // cors
app.use(morgan('combined'))
app.use(express.json()) // parse any JSON coming from incoming requests
app.use(express.static(path.join(__dirname, '..', 'public'))) // serve public folders

/* ---- Routes ---- */
app.use('/api', planetsRouter)
app.use('/api', launchesRouter)

app.get('/*', (req, res) => {
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
