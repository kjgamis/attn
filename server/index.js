const express = require('express')
const app = express()
require('dotenv').config()
const messages = require('./routes/messages')
const connectDb = require('./db/connect')
const port = 8080

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/messages', messages)

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
