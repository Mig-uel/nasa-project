const path = require('path')
const express = require('express')
const cors = require('cors')

/* ---- Routers ---- */
const planetsRouter = require('./routes/planets/planets.router')

/* ---- Setup Express ---- */
const app = express()

/* ---- Middleware ---- */
app.use(cors({ origin: 'http://localhost:3000' })) // cors
app.use(express.json()) // parse any JSON coming from incoming requests
app.use(express.static(path.join(__dirname, '..', 'public')))

/* ---- Routes ---- */
app.use('/api', planetsRouter)
app.get('/', (req, res) => {
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
