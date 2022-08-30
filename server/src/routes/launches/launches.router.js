const express = require('express')

/* ---- Controllers ---- */
const { httpGetAllLaunches } = require('./launches.controller')

/* ---- Router Object ---- */
const launchesRouter = express.Router()

launchesRouter.get('/launches', httpGetAllLaunches)

module.exports = launchesRouter
