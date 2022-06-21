const express = require('express')
const session = express.Router()

// Create
session.post('/', (req, res) => {
  res.json('session Created')
})

// Destroy
session.delete('/:sessionId', (req, res) => {
  res.json(`session ${req.params.sessionId} Destroyed`)
})

module.exports = session;
