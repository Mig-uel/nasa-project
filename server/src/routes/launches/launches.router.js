const express = require('express')

/* ---- Controllers ---- */
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require('./launches.controller')

/* ---- Router Object ---- */
const launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)

module.exports = launchesRouter
