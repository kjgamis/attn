require('dotenv').config()
const connectDb = require('./db/connect')
const Message = require('./models/Message')
const jsonMessages = require('./populate.json')

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    await Message.deleteMany()
    await Message.create(jsonMessages)
    process.exit(0)
  } catch (error) {
    console.log(error)
  }
}

start()
