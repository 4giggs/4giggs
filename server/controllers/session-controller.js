const db = require('../db/index.js');

const bcrypt = require('bcrypt');
const { query } = require('express');
const saltRounds = 7;

const sessionController = {};

sessionController.create = function(req, res, next) {
  const { email, password } = req.body;
  const errorObj = {
    message: 'Error: User not authenticated'
  };


  const successObj = {
    message: 'Success: User Logged In.'
  };

  // Select user from db where email = useremail
  // ALWAYS USE parametrized queries instead of direct SQL queries to avoid injection attacks to DB
  queryText = `
    SELECT * FROM users WHERE (email = $1)
  `
  params = [email];

  db.query(queryText, params, (err, queryResult) => {
    if (err) {
      next({log: 'Error in sessionController.create: ' + err.message});
    } else {
      // Use Bcrypt Compare to check if hashedPassword matches submited password
      const hashedPW = queryResult.rows[0].hashedpw.toString();
      bcrypt.compare(password, hashedPW, function(err, result) {
        if(err) {
          res.json(errorObj);
        } else {
          const userId = queryResult.rows[0]._id;
          req.session.regenerate(() => {
            req.session.userId = userId;
            res.json(successObj);
          });
        };
      });
    };
  });
};

module.exports = sessionController;