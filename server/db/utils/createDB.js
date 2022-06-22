const db = require('../index.js');

const queryText = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    _id SERIAL PRIMARY KEY,
    name text NOT NULL,
    hashedPW bytea NOT NULL,
    email text NOT NULL
  );

  DROP TABLE IF EXISTS jobs;
  CREATE TABLE jobs (
    _id SERIAL PRIMARY KEY,
    company text NOT NULL,
    title text NOT NULL,
    stage text NOT NULL,
    link text NOT NULL,
    _created_at timestamptz DEFAULT current_timestamp,
    user_id integer NOT NULL REFERENCES users(_id)
  );

  DROP TABLE IF EXISTS sessions;
`;
// sessions table in PSQL gets auto created by express' sessions package
const queryParams = [];

db.query(queryText, queryParams, (err, res) => {
  if (err) {
    return err;
  } else {
    return res;
  }
});