const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const api = require('./routes/api')

/* ---- Setup Express ---- */
const app = express()

/* ---- Middleware ---- */
app.use(cors({ origin: 'http://localhost:3000' })) // cors
app.use(morgan('combined'))
app.use(express.json()) // parse any JSON coming from incoming requests
app.use(express.static(path.join(__dirname, '..', 'public'))) // serve public folders
app.use('/v1', api)

app.get('/*', (req, res) => {
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
