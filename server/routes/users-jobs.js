const express = require('express');
const usersJobs = express.Router();
const jobController = require('../controllers/job-controller.js');

// Read
usersJobs.get('/', jobController.read, (req, res) => {
  res.json(res.locals.jobs);
});

module.exports = usersJobs;