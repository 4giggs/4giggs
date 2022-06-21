const express = require('express')
const job = express.Router()

// Create
job.post('/', (req, res) => {
  res.json('job Created')
})

// Read
job.get('/:jobId', (req, res) => {
  res.json(`job ${req.params.jobId}`)
})

// Update
job.patch('/:jobId', (req, res) => {
  res.json(`job ${req.param.jobId} Updated`)
})

// Destroy
job.delete('/:jobId', (req, res) => {
  res.json(`job ${req.params.jobId} Destroyed`)
})

module.exports = job;
