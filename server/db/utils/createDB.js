const db = require('../index.js');

const queryText = `
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    _id SERIAL,
    name text NOT NULL,
    hashedPW bytea NOT NULL,
    email text NOT NULL,
  );

  CREATE TABLE jobs (
    _id SERIAL,
    company text NOT NULL,
    title text NOT NULL,
    stage text NOT NULL,
    link text NOT NULL,
    _created_at timestamptz DEFAULT current_timestamp,
    _last_modified_at timestamptz DEFAULT  
  );
`;

const queryParams = [];


db.query(queryText, queryParams, (err, res) => {
  if (err) {
    return err;
  } else {
    return res;
  }
});