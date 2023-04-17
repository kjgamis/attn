const express = require('express')
const cors = require('cors')
const app = express()
require('express-async-errors')
const Problem = require('api-problem')
const problemMiddleware = require('api-problem/lib/middleware')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const messages = require('./routes/messages')

app.use(cors())
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/messages', messages)
app.use('*', () => {
  throw new Problem(404, 'Route does not exist')
})

app.use(errorHandlerMiddleware)
app.use(problemMiddleware)

module.exports = app
