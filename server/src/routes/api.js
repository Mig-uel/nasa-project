const express = require('express')

/* ---- Routers ---- */
const planetsRouter = require('./planets/planets.router')
const launchesRouter = require('./launches/launches.router')

const api = express.Router()

/* ---- Routes ---- */
api.use('/api/planets', planetsRouter)
api.use('/api/launches', launchesRouter)

module.exports = api
