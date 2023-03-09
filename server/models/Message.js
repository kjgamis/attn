const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  title: String,
  message: String,
  mobile: String 
})

module.exports = mongoose.model('Messages', MessageSchema)
