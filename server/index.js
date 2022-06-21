const express = require('express')
const app = express()
const port = 3000
const expressSession = require('express-session');

/**
 * Middleware
 */
app.use(expressSession({
  cookie: {maxAge: 180 * 24 * 60 * 60}
}))


/**
 * Routes
 */

// User
const user = require('./routes/user');
app.use('/user', user);

// Job
const job = require('./routes/job');
app.use('/job', job);

// Interview
const interview = require('./routes/interview');
app.use('/interview', interview);

// Session
const session = require('./routes/session');
app.use('/login', session);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})