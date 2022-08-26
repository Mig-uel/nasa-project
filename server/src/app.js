const express = require('express')
const cors = require('cors')

/* ---- Routers ---- */
const planetsRouter = require('./routes/planets/planets.router')

/* ---- Setup Express ---- */
const app = express()

/* ---- Middleware ---- */
app.use(cors({ origin: 'http://localhost:3000' })) // cors
app.use(express.json()) // parse any JSON coming from incoming requests

/* ---- Routes ---- */
app.use('/api', planetsRouter)

module.exports = app
