const express = require('express')
const user = express.Router()

// Create
user.post('/', (req, res) => {
  res.json('User Created')
})

// Read
user.get('/:userId', (req, res) => {
  res.json(`User ${req.params.userId}`)
})

// Update
user.patch('/:userId', (req, res) => {
  res.json(`User ${req.params.userId} Updated`)
})

// Destroy
user.delete('/:userId', (req, res) => {
  res.json(`User ${req.params.userId} Destroyed`)
})

module.exports = user;
