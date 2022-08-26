const express = require('express')

/* ---- Routers ---- */
const planetsRouter = require('./routes/planets/planets.router')

/* ---- Setup Express ---- */
const app = express()

/* ---- Middleware ---- */
app.use(express.json()) // parse any JSON coming from incoming requests

/* ---- Routes ---- */
app.use('/api', planetsRouter)

module.exports = app
