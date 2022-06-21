const db = require('../db/index.js');

const userController = {};

userController.create = function(req, res, next) {
  queryText = `
    INSERT INTO
      users (name, hashedPW, email)
      VALUES ($1, $2, $3)
  `

  params = [req.body.name, JSON.stringify(req.body.hashedPW), JSON.stringify(req.body.email)];

  db.query(queryText, params, (err, res) => {
    if (err) {
      next({log: 'Error in userController.create: ' + err.message});
    } else {
      next();
    };
  });
};

userController.read = function(req, res, next) {
  const queryText = `SELECT * FROM users`;
  const params = [];

  db.query(queryText, params, (err, queryResult) => {
    if (err) {
      next({log: "Error in userController.read: " + err.message})
    } else {
      res.locals.users = queryResult.rows;
      next();
    };
  });
};

userController.delete = function(req, res, next) {
  const queryText = `DELETE FROM users WHERE _id=$1`;
  const params = [req.params.id];

  db.query(queryText, params, (err, queryResult) => {
    if (err) {
      next({log: 'Error in userController.delete: ' + err.message});
    } else {
      res.locals.deletedItem = queryResult.rows;
      next();
    };
  });
};

module.exports = userController;