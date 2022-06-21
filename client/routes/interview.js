const express = require('express')
const interview = express.Router()

// Create
interview.post('/', (req, res) => {
  res.json('interview Created')
})

// Read
interview.get('/:interviewId', (req, res) => {
  res.json(`interview ${req.params.interviewId}`)
})

// Update
interview.patch('/:interviewId', (req, res) => {
  res.json(`interview ${req.param.interviewId} Updated`)
})

// Destroy
interview.delete('/:interviewId', (req, res) => {
  res.json(`interview ${req.params.interviewId} Destroyed`)
})

module.exports = interview;
