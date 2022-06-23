const express = require('express');
const app = express();
const port = 3000;
const expressSession = require('express-session');
const db = require('./db/index.js');
var cors = require('cors');
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:8080'],
    credentials: true,
  })
);

/**
 * Middleware
 */
app.use(
  expressSession({
    store: new (require('connect-pg-simple')(expressSession))({
      pool: db.pool,
      createTableIfMissing: true,
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'gigg gigg',
    cookie: { maxAge: 180 * 24 * 60 * 60 * 1000, httpOnly: false },
    name: 'userSession',
  })
);

app.use(express.json());

/**
 * Routes
 */

// User
const user = require('./routes/user');
app.use('/user', user);

// Users Jobs
const usersJobs = require('./routes/users-jobs');
app.use('/users-jobs', usersJobs);

// Job
const job = require('./routes/job');
app.use('/job', job);

// Interview
const interview = require('./routes/interview');
app.use('/interview', interview);

// Session
const session = require('./routes/session');
app.use('/login', session);

// Global Error Handler
app.use((err, req, res, next) => {
  defaultError = {
    log: 'An unkown Error Occured in React MiddleWare',
    message: 'An error occurred',
  };

  defaultError = {
    ...defaultError,
    log: err.log,
  };
  console.log(defaultError.log);
  res.status(400).send(defaultError.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
