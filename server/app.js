const express = require('express')
const cors = require('cors')
const app = express()
const messages = require('./routes/messages')

app.use(cors())
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/messages', messages)
app.use('*', (req, res) => res.status(404).send('Route does not exist'))

module.exports = app
