const express = require('express');
const job = express.Router();
const jobController = require('../controllers/job-controller.js');

// Create
// Try to associate user with the job, Michael building helper function to test if someone is logged in
job.post('/', jobController.create, (req, res) => {
  res.json('Job Created');
})

// Read
job.get('/:jobId', jobController.read, (req, res) => {
  res.json(`Job ${req.params.jobId}`);
})

// Update
job.patch('/:jobId', (req, res) => {
  res.json(`Job ${req.params.jobId} Updated`)
})

// Destroy
job.delete('/:jobId', jobController.delete, (req, res) => {
  res.json(`Job ${req.params.jobId} Deleted`);
})

module.exports = job;
