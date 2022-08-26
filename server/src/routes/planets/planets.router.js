const express = require('express')
const { getAllPlanets } = require('./planets.controller')

/* ---- Setup Router ---- */
const planetsRouter = express.Router()

/* ---- Routes ---- */
planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter
