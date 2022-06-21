const express = require('express')
const job = express.Router()

// Create
// Try to associate user with the job, Michael building helper function to test if someone is logged in
// 
job.post('/', (req, res) => {
  res.json('job Created')
})

// Read
job.get('/:jobId', (req, res) => {
  res.json(`job ${req.params.jobId}`)
})

// Update
job.patch('/:jobId', (req, res) => {
  res.json(`job ${req.params.jobId} Updated`)
})

// Destroy
job.delete('/:jobId', (req, res) => {
  res.json(`job ${req.params.jobId} Destroyed`)
})

module.exports = job;
