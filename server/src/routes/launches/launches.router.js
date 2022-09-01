const express = require('express')

/* ---- Controllers ---- */
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require('./launches.controller')

/* ---- Router Object ---- */
const launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)
launchesRouter.patch('/:id', httpAbortLaunch)

module.exports = launchesRouter
