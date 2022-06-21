// Can become expensive to initialize connection with DB -> Pattern that makes DB access more efficient
const { Pool } = require('pg');
// Ensure to keep as "connectionString", as it is an embedded attribute
const connectionString = 'postgres://mhjfixnz:uPzQfOUfobIGU9rEdsx2mJpiZqg6Zomu@heffalump.db.elephantsql.com/mhjfixnz';

const pool = new Pool({
  connectionString
});

module.exports = {
  query: (text, params, callback) => {
    executedAt = Date.now();
    console.log('Executed query ~ ', {executedAt, text});
    return pool.query(text, params, callback);
  }
};