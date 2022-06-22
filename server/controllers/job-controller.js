const db = require('../db/index.js');

const jobController = {};

jobController.create = function(req, res, next) {
  const queryText = `
    INSERT INTO
    jobs (company, title, stage, link, _created_at, user_id)
    VALUES ($1, $2, $3, $4, to_timestamp($5), $6)
  `
  params = [
    req.body.company, 
    req.body.title, 
    req.body.stage, 
    JSON.stringify(req.body.link), 
    Date.now(),
    req.session.userId
  ];
  console.log(req.session);
  db.query(queryText, params, (err, res) => {
    if (err) {
      return next({log: 'Error in jobController.create: ' + err.message});
    } else {
      return next();
    }
  });
};

jobController.read = function(req, res, next) {
  const queryText = `SELECT * FROM jobs WHERE user_id=${req.session.userId}`;
  const params = [];

  db.query(queryText, params, (err, queryResult) => {
    if (err) {
      next({log: 'Error in userController.read: ' + err.message});
    } else {
      res.json(queryResult.rows);
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