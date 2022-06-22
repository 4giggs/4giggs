const express = require('express');
const { nextTick } = require('process');
const session = express.Router();
const sessionController = require('../controllers/session-controller');

//Mock UserDB
// const users = {
//   'mteifel': {
//     id: 1,
//     email: 'teifel7@gmail.com',
//     password: 'password123'
//   }
// };

// Create
session.post('/', sessionController.create, (req, res) => {
  res.json('Session Created');
  // try {
  //   if(users[user].password === password) {
  //     req.session.regenerate(() => {
  //       req.session.userId = users[user].id;
  //       resObj.message = 'Success: User logged in';
  //       res.data = {...res.session};
  //     });
  //   }
  // } catch (err) {
  //     res.json(resObj);
  // }
});

// Destroy
session.delete('/', (req, res) => {
  req.session.destroy((err) => {
    if(!err) res.json(`session ${req.params.sessionId} Destroyed`);
  });
});

module.exports = session;
