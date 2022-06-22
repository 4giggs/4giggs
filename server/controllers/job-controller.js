const db = require('../db/index.js');

const jobController = {};

jobController.create = function(req, res, next) {
  const queryText = `
    INSERT INTO
    jobs (company, title, stage, link, _created_at, user_id)
    VALUES ($1, $2, $3, $4, $5)
  `
  params = [
    req.body.company, 
    req.body.title, 
    req.body.stage, 
    JSON.stringify(req.body.link), 
    req.body._created_at,
    req.session.userId
  ];

  db.query(queryText, params, (err, res) => {
    if (err) {
      return next({log: 'Error in jobController.create: ' + err.message});
    } else {
      return next();
    }
  });
};

jobController.read = function(req, res, next) {
  const queryText = `SELECT * FROM jobs`;
  const params = [];

  db.query(queryText, params, (err, queryResult) => {
    if (err) {
      next({log: 'Error in userController.read: ' + err.message});
    } else {
      next();
    };
  });
};

jobController.delete = function(req, res, next) {
  const queryText = `DELETE FROM jobs WHERE _id=$1`;
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

module.exports = jobController;