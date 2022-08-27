const express = require('express')

/* ---- Controllers ---- */
const { getAllLaunches } = require('./launches.controller')

/* ---- Router Object ---- */
const launchesRouter = express.Router()

launchesRouter.get('/launches', getAllLaunches)

module.exports = launchesRouter
