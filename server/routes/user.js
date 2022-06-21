const express = require('express');
const user = express.Router();
const userController = require('../controllers/user-controller.js');

// Create
user.post('/', userController.create, (req, res) => {
  res.json('User Created');
});

// Read
user.get('/:userId', userController.read, (req, res) => {
  res.json(`User ${req.params.userId}`);
});

// Update
user.patch('/:userId', (req, res) => {
  res.json(`User ${req.params.userId} Updated`);
});

// Destroy
user.delete('/:userId', userController.delete, (req, res) => {
  res.json(`User ${req.params.userId} Destroyed`);
});

module.exports = user;
