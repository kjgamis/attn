const express = require('express')
const app = express()
require('dotenv').config()
const messages = require('./routes/messages')
const connectDb = require('./db/connect')

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/messages', messages)
app.use('*', (req, res) => res.status(404).send('Route does not exist'))
const port = process.env.PORT || 8080

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`listening to port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
