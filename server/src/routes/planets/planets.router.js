const express = require('express')
const { httpGetAllPlanets } = require('./planets.controller')

/* ---- Setup Router ---- */
const planetsRouter = express.Router()

/* ---- Routes ---- */
planetsRouter.get('/planets', httpGetAllPlanets)

module.exports = planetsRouter
