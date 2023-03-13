require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/connect')
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
